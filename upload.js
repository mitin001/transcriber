const fs = require("fs");
const util = require("util");
const express = require("express");

const router = express.Router();
const exec = util.promisify(require("child_process").exec);

async function executeCommand(cmd) {
  return await exec(cmd, {
    maxBuffer: 8 * 1024 * 1024
  });
}

router.post("/", async (request, response) => {
  try {
    const {files, body} = request || {};
    const {size: modelSize, lang} = body || {};
    const {audio} = files || {};
    const {name, size, encoding, truncated, mimetype, md5, mv} = audio || {}; // see docs/file.json5
    const relPath = `tmp/${md5}`;
    await mv(relPath);

    const txtPublicFilePath = `lookups/${md5}.txt`;
    const txtFilePath = `public/${txtPublicFilePath}`;

    // -u means urgent: the task is given priority over other queued tasks
    const {stdout: jobId} = await executeCommand(`ts sh docker.sh ${relPath} ${modelSize} ${lang}`);
    executeCommand(`ts -u ${jobId}`).then().catch();

    const uploadInfo = JSON.stringify({
      name, size, encoding, truncated, mimetype, md5, jobId,
      jobUrl: `http://${request.headers.host}/upload/jobs/${jobId.trim()}`,
    });
    const txt = `Upload info: ${uploadInfo}\n\n`;
    fs.writeFileSync(txtFilePath, txt);

    response.redirect(txtPublicFilePath);

  } catch(error) {
    response.status(500).send(error.toString());
  }
});

router.get("/jobs/latest", async (request, response) => {
  try {
    const {params} = request || {};
    executeCommand(`ts | awk '{print $1}' | sort -rn | head -n 1`).then((std) => {
      const {stdout} = std || {};
      response.redirect(`/upload/jobs/${stdout.trim()}`);
    }).catch();
  } catch(error) {
    response.status(500).send(error.toString());
  }
});

router.get("/jobs/:id", async (request, response) => {
  try {
    const {params} = request || {};
    const {id} = params || {};
    executeCommand(`cat $(ts -o ${id})`).then((std) => {
      const {stdout} = std || {};
      const [transcriptFilename] = stdout.match(/transcripts\/.+\.csv/) || [];
      const transcriptUrl = `http://${request.headers.host}/${transcriptFilename}`;
      response.type("txt").send(`${transcriptUrl}\n\n${stdout}`);
    }).catch();
  } catch(error) {
    response.status(500).send(error.toString());
  }
});

module.exports = {router};

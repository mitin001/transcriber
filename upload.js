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

async function passCommand(cmd, response) {
  try {
    executeCommand(cmd).then((std) => {
      const {stdout} = std || {};
      response.type("txt").send(stdout);
    }).catch();
  } catch(error) {
    response.status(500).send(error.toString());
  }
}

async function transcribe(audio, lang, modelSize, host) {
    const {name, size, encoding, truncated, mimetype, md5, mv} = audio || {}; // see docs/file.json5
    await mv(`tmp/${md5}`);

    const txtPublicFilePath = `lookups/${md5}.txt`;
    const txtFilePath = `public/${txtPublicFilePath}`;

    const {stdout: jobId} = await executeCommand(`ts sh docker.sh ${md5} ${modelSize} ${lang}`);

    const uploadInfo = JSON.stringify({
      name, size, encoding, truncated, mimetype, md5, jobId,
      jobUrl: `http://${host}/upload/jobs/${jobId.trim()}`,
    });
    const txt = `Upload info: ${uploadInfo}\n\n`;
    fs.writeFileSync(txtFilePath, txt);
}

router.post("/", async (request, response) => {
  try {
    const {files, body} = request || {};
    const {size: modelSize, lang} = body || {};
    const {audio} = files || {};
    await Promise.all(audio.map(file => transcribe(file, lang, modelSize, request.headers.host)));
    response.redirect("/upload/ts");
  } catch(error) {
    response.status(500).send(error.toString());
  }
});

router.get("/jobs/latest", async (request, response) => {
  try {
    const {params} = request || {};
    executeCommand(`ts | awk '$1 ~ /[0-9]/ {print $1}' | sort -rn | head -n 1`).then((std) => {
      const {stdout} = std || {};
      response.redirect(stdout.trim()); // /upload/jobs/latest => /upload/jobs/5
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

router.get("/ts", async (request, response) => {
  passCommand("ts", response);
});

router.get("/shutdown", async (request, response) => {
  passCommand("shutdown; cat /run/systemd/shutdown/scheduled", response);
});

router.get("/shutdown/check", async (request, response) => {
  // https://askubuntu.com/a/1276705
  passCommand("cat /run/systemd/shutdown/scheduled; echo $?", response);
});

router.get("/shutdown/cancel", async (request, response) => {
  passCommand("shutdown -c; echo $?", response);
});

module.exports = {router};

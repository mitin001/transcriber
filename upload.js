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
    const {files} = request || {};
    const {audio} = files || {};
    const {name, size, encoding, truncated, mimetype, md5, mv} = audio || {}; // see docs/file.json5
    const relPath = `tmp/${md5}`;
    await mv(relPath);

    const uploadInfo = JSON.stringify({
      name, size, encoding, truncated, mimetype, md5
    });
    const txtPublicFilePath = `lookups/${md5}.txt`;
    const txtFilePath = `public/${txtPublicFilePath}`;

    const txt = `Upload info: ${uploadInfo}\n\n`;
    fs.writeFileSync(txtFilePath, txt);

    // -u means urgent: the task is given priority over other queued tasks
    const {stdout: jobIdLine} = await executeCommand(`ts sh sh/match.sh ${relPath} ${txtFilePath} tiny`);
    executeCommand(`ts -u ${jobIdLine}`).then().catch();

    response.redirect(txtPublicFilePath);

  } catch(error) {
    response.status(500).send(error.toString());
  }
});

module.exports = {router};

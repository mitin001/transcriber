const fs = require("fs");
const util = require("util");
const express = require("express");

const router = express.Router();
const exec = util.promisify(require("child_process").exec);

function insertColons(str) {
  if (!str.length) {
    return "";
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
  // https://stackoverflow.com/a/6259543
  // https://stackoverflow.com/a/959004
  return str.padStart(6, "0").split("").join("").match(/.{1,2}/g).join(":");
}

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

async function transcribe(audio, lang, modelSize, host, time, interval) {
  const {name, size, encoding, truncated, mimetype, md5, mv} = audio || {}; // see docs/file.json5
  await mv(`tmp/${md5}`);

  const txtPublicFilePath = `lookups/${md5}.txt`;
  const txtFilePath = `public/${txtPublicFilePath}`;
  
  const jobId = await queue(md5, time, interval, modelSize, lang);

  const uploadInfo = JSON.stringify({
    name, size, encoding, truncated, mimetype, md5, jobId,
    jobUrl: `http://${host}/upload/jobs/${jobId}`,
  });
  const txt = `Upload info: ${uploadInfo}\n\n`;
  fs.writeFileSync(txtFilePath, txt);
}

async function queue(md5, time, interval, modelSize, lang) {
  let filename = md5;
  if (time) {
    const {stdout: ss} = await executeCommand(
      `echo $(TZ=UTC date -d "0000-01-01T${time}Z - ${interval} seconds" +"echo \\$((%H*60+%M)).%S") | sh`
    );
    const {stdout: to} = await executeCommand(
      `echo $(TZ=UTC date -d "0000-01-01T${time}Z + ${interval} seconds" +"echo \\$((%H*60+%M)).%S") | sh`
    );
    filename = `${md5}-${time}-${interval}`;
    if (!fs.existsSync(`tmp/${md5}.mp3`)) {
      await executeCommand(`ffmpeg -i tmp/${md5} -f mp3 tmp/${md5}.mp3`);
    }
    await executeCommand(`mp3splt tmp/${md5}.mp3 ${ss.trim()} ${to.trim()} -o ${filename}`);
    await executeCommand(`mv tmp/${filename}.mp3 tmp/${filename}`);
  }
  const {stdout: jobId} = await executeCommand(`ts sh docker.sh ${filename} ${modelSize} ${lang} ${md5}`);
  return jobId.trim();
}

router.post("/", async (request, response) => {
  try {
    const {files, body} = request || {};
    const {size: modelSize, lang, time, interval} = body || {};
    const {audio} = files || {};
    const audioFiles = Array.isArray(audio) ? audio : [audio];
    await Promise.all(
      audioFiles.map(
        file => transcribe(file, lang, modelSize, request.headers.host, insertColons(time), interval)
      )
    );
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

router.get("/r/:md5/:interval/:time", async (request, response) => {
  try {
    const {params} = request || {};
    const {md5, time, interval} = params || {};
    await queue(md5, insertColons(time), interval, "medium.en", "auto");
    response.redirect("/upload/ts");
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

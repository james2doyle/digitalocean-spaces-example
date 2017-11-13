const config = require('./config');
const server = require('server');

const { get, post } = server.router;
const {
  render, redirect, json, status,
} = server.reply;

const buildFileObject = require('./lib/build-file-object');
const unlinkFileAsync = require('./lib/unlink-file-async');
const moveFile = require('./lib/move-file');
const uploadFile = require('./lib/upload-file');

const loggingMiddleware = async function (ctx) {
  console.log(`${ctx.method} ${ctx.url}`);
};

server(
  config.serverConfig,
  loggingMiddleware,
  [
    // serve index.html from the public dir
    get('/', ctx => render('public/index')),
    post('/upload', async (ctx) => {
      // sets up an object for the rest of the response
      const file = buildFileObject(ctx.req.files.file);
      // move the file from /tmp to the public folder
      return moveFile(file.tempPath, file.outPath)
        // upload the file to S3
        .then(() => uploadFile(file.outPath, file.filename))
        // delete the local version of the file
        .then(() => unlinkFileAsync(file.outPath))
        // respond with some JSON
        .then(() => json(file))
        // handle errors
        .catch((err) => {
          console.log(err);
          status(500).json({
            error: 'error uploading',
            originalError: err,
          });
        });
    }),
  ],
);

console.log('running on http://localhost:3000/');

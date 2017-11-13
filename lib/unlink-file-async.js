const fs = require('fs');
const promisify = require('util').promisify;

const unlinkFileAsync = promisify(fs.unlink);

module.exports = unlinkFileAsync;

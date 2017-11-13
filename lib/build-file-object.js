const config = require('../config');

module.exports = function (file) {
  const tempPath = file.path;
  const filename = `${Date.now()}-${file.name}`;
  const outPath = `./public/uploads/${filename}`;
  const url = `https://${config.Bucket}.${config.region}.digitaloceanspaces.com/${filename}`;

  return {
    tempPath,
    filename,
    outPath,
    url,
  };
};

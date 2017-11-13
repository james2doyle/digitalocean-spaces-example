const config = require('../config');
const UploadStream = require('s3-stream-upload');
const S3 = require('aws-sdk').S3;
const fs = require('fs');

module.exports = function (localfile, filename) {
  return new Promise((resolve, reject) => {
    const s3 = new S3(config);

    fs.createReadStream(localfile)
      .pipe(UploadStream(s3, {
        Bucket: config.Bucket,
        Key: filename,
        ACL: 'public-read', // private or public-read
        ContentType: 'image/jpg', // set here, but could be automatic
      }))
      .on('error', reject)
      .on('finish', resolve);
  });
};

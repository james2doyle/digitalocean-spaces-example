DigitalOcean Spaces Example
===========================

> An example on how to use DigitalOcean Spaces with S3 libraries.

The DigitalOcean Spaces API is almost a 1:1 copy of the S3 API. But there are some differences. The main difference is which APIs are supported. Obviously, the DigitalOcean Spaces API supports less features than real S3. There is some more detail in the [Spaces Documentation](https://developers.digitalocean.com/documentation/spaces/#aws-s3-compatibility).

### Usage

* copy `example-config.js` to `config.js`
* update `config.js` with the correct details
* `npm start`

### Libraries

* [aws-sdk](https://www.npmjs.com/package/aws-sdk)
* [s3-stream-upload](https://www.npmjs.com/package/s3-stream-upload)
* [server](https://www.npmjs.com/package/server)

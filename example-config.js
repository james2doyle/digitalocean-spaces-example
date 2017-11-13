module.exports = {
  accessKeyId: '',
  secretAccessKey: '',
  Bucket: '',
  region: 'nyc3',
  endpoint: 'https://nyc3.digitaloceanspaces.com',
  signatureVersion: 'v4',
  s3DisableBodySigning: true,
  serverConfig: {
    security: {
      csrf: false,
    },
    port: 3000,
  },
};

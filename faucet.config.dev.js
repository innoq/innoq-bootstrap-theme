const path = require('path')

const config = {
  sass: [
    {
      source: "./src/styles/index.scss",
      target: "./documentation/docs/4.6/dist/css/bootstrap.css",
    },
  ],
};

module.exports = config

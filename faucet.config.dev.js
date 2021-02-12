const path = require('path')

const config = {
  static: [
    {
      source: "./dist/css/innoq-bootstrap-theme.css",
      target: "./documentation/docs/4.6/dist/css",
    },
  ],
  sass: [
    {
      source: "./src/styles/index.scss",
      target: "./dist/css/innoq-bootstrap-theme.css",
    },
  ]
};

module.exports = config

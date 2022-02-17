const path = require("path");

const config = {
  sass: [
    {
      source: "./src/styles/index.scss",
      target: "./documentation/docs/5.1/dist/css/bootstrap.css",
    },
  ],
};

module.exports = config;

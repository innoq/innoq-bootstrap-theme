const path = require('path')

const config = {
  static: [
    {
      source: './node_modules/bootstrap/dist/js',
      target: './dist/js'
    },
    {
      source: './dist/css/innoq-bootstrap-theme.css',
      target: './documentation/dist/css/bootstrap.css'
    }
  ],
  sass: [
    {
      source: './src/styles/index.scss',
      target: './dist/css/innoq-bootstrap-theme.css'
    }
  ]
}

module.exports = config

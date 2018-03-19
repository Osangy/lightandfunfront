'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://bank.ngrok.io/"',
  BOT_URL: '"https://m.me/157838028206922"'
})

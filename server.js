// server.js
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app = express();
app.use(history());
app.use(helmet.frameguard({
  action: 'allow-from',
  domain: 'https://www.messenger.com/'
},{
  action: 'allow-from',
  domain: 'https://www.facebook.com/'
}))
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);

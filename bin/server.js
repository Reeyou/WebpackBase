const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const opn = require ('opn')

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = 5050

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: false,
  noInfo: false,
  lazy: false,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: 'errors-only',
})

devMiddleware.waitUntilValid(() => {
  opn("http://localhost:" + port)
})

app.use(devMiddleware)

// Serve the files on port 3000.
app.listen(port, function () {
  console.log(`Your application listening on localhost:${port}!\n`);
});
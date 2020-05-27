const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const opn = require('opn')
const chalk = require('chalk')

const app = express();
const config = require('./webpack.dev.js');
// const config = require('./webpack.config.js');
const compiler = webpack(config);

const host = process.env.HOST || 'localhost';
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

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

const uri = `http://${host}:${port}`
devMiddleware.waitUntilValid(() => {
  console.log(`Your application listening on ${chalk.cyan.bold(uri)}!\n`);
  opn("http://localhost:" + port)
})

app.use(devMiddleware)

// Serve the files on port.
app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  // if (process.env.NODE_ENV !== 'testing') {
  //     opn(uri);
  // }
});
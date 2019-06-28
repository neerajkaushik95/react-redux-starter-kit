const chalk = require('chalk');
const config = require('../config/default');

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  const express = require('express');
  const compress = require('compression');

  const app = express();

  app.use(compress());

  // Configure static resources
  app.use(express.static(path.join(__dirname, '../dist')));

  // Configure server-side routing
  app.get('*', (req, res) => {
    const dist = path.join(__dirname, '../dist/index.html');
    res.sendFile(dist);
  });

  // Open socket
  app.listen(config.port, () => {
    console.log(chalk.green(`Started Express server on port ${config.port}`));
  });
} else {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('../webpack.config.dev.js');

  new WebpackDevServer(webpack(webpackConfig), {
    hot: true,
    historyApiFallback: true,
    clientLogLevel: 'error',
    compress: true,
    open: true,
  }).listen(config.port, 'localhost', error => {
    if (error) console.log(chalk.red(error));
    else {
      console.log(chalk.bold.green(`Started WebpackDevServer on PORT:  ${config.port}`));
      if (config.ngrok) {
        const ngrok = require('ngrok');
        (async function () {
          const url = await ngrok.connect({
            addr: config.port,
            host_header: config.port
          });
          console.log(chalk.bold.green(`Ngrok tunnel running URL:  ${url}`));
        })();
      }
    }
  });
}

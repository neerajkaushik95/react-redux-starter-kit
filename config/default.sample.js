const path = require('path');

const AppConfig = {
};

module.exports = {
  port: 4000,
  basePath: path.resolve(__dirname, '../'),
  ngrok: false,
  /** A hash map of variables and their values to expose globally */
  globals: {
    AppConfig: JSON.stringify(AppConfig),
  },
};

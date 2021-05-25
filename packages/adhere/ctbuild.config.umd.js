const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};

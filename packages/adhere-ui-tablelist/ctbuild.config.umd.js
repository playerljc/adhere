const path = require('path');
const { defaultExternals } = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    webpackConfig.externals = { ...defaultExternals };
  },
};

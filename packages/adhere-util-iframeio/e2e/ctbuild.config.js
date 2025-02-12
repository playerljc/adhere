const path = require('path');
const baseConfig = require('../../../e2e/ctbuild..config.js');

module.exports = {
  getTheme() {
    return baseConfig.getTheme();
  },
  getConfig(params) {
    const { webpackConfig } = params;

    baseConfig.getConfig(params);

    webpackConfig.entry.index = path.join(__dirname, '../e2e', 'index.jsx');

    webpackConfig.module.rules[0].include = [
      path.join(__dirname, '../e2e'),
      path.join(__dirname, '../src'),
    ];
    webpackConfig.module.rules[1].include = [
      path.join(__dirname, '../e2e'),
      path.join(__dirname, '../src'),
    ];

    webpackConfig.module.rules[3].include.push(path.join(__dirname, '../e2e'));

    webpackConfig.resolve.alias['@'] = path.join(__dirname, '../e2e');

    if (webpackConfig.mode === 'development') {
      webpackConfig.devServer.host = '0.0.0.0';
    }
  },
};

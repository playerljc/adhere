const path = require('path');
const baseConfig = require('@baifendian/adhere-e2e/ctbuild.e2e.config.js');

module.exports = {
  getTheme() {
    return baseConfig.getTheme();
  },
  getConfig(config) {
    baseConfig.getConfig({
      config,
      e2ePath: path.join(__dirname, '../e2e'),
      srcPath: path.join(__dirname, '../src'),
    });
  },
};

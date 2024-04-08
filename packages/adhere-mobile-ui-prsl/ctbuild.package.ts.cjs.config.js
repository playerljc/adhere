const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.cjs.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.plugins.push(...require('../../babel-plugin-import-antd-mobile.js').lib);
    defaultBabelConfig.plugins.push(require('../../babel-plugin-import-antd.js').lib[3]);
  },
};

const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.esm.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.presets[0].push({
      modules: false,
    });
    defaultBabelConfig.plugins.push(require('../../babel-plugin-import-antd-es.js'));
  },
};

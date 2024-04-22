const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.esm.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.presets[0].push({
      modules: false,
    });
    defaultBabelConfig.plugins.push(...require('../../babel-plugin-import-antd.js').es);

    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: '@baifendian/adhere-mobile-ui-anthoc',
        libraryDirectory: 'es',
        style: false,
      },
      'adhere-mobile-ui-anthoc',
    ]);
  },
};

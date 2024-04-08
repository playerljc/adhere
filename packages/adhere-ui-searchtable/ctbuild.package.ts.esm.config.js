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
        libraryName: '@ant-design/icons',
        libraryDirectory: 'es/icons',
        camel2DashComponentName: false,
        style: false,
      },
      '@ant-design/icons',
    ]);

    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: '@baifendian/adhere-ui-anthoc',
        libraryDirectory: 'es',
        style: false,
      },
      'adhere-ui-anthoc',
    ]);
  },
};

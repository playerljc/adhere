const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.cjs.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.plugins.push(...require('../../babel-plugin-import-antd.js').lib);

    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'lib/icons',
        camel2DashComponentName: false,
        style: false,
      },
      '@ant-design/icons',
    ]);

    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: '@baifendian/adhere-ui-anthoc',
        libraryDirectory: 'lib',
        style: false,
      },
      'adhere-ui-anthoc',
    ]);
  },
};

const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.presets.push('@babel/preset-react');
    defaultBabelConfig.plugins.shift();
    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: false,
      },
      'ant',
    ]);
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
  },
};

const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.module.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.presets.push('@babel/preset-react');
    defaultBabelConfig.plugins.shift();
    defaultBabelConfig.presets[0][1].modules = false;
    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: false,
      },
      'ant',
    ],)
  },
};

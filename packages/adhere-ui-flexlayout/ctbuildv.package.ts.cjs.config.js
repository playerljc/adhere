const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.cjs.json');
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
  },
};

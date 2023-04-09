const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.cjs.json');
  },
  getBabelConfig(defaultBabelConfig) {
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
        libraryName: '@baifendian/adhere-ui-anthoc',
        libraryDirectory: 'lib',
        style: false,
      },
      'adhere-ui-anthoc',
    ]);
  },
};

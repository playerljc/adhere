const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.cjs.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.plugins.push(require('../../babel-plugin-import-antd.js').lib);

    defaultBabelConfig.plugins.push(
      [
        'import',
        {
          libraryName: '@baifendian/adhere-ui-anthoc',
          libraryDirectory: 'lib',
          style: false,
        },
        'adhere-ui-anthoc',
      ],
      [
        'import',
        {
          libraryName: '@baifendian/adhere-mobile-ui-anthoc',
          libraryDirectory: 'lib',
          style: false,
        },
        'adhere-mobile-ui-anthoc',
      ],
    );
  },
};

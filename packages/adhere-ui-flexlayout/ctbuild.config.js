const path = require('path');

module.exports = {
  // getConfig({ webpackConfig }) {
  //   webpackConfig.resolve.modules.unshift(path.join(__dirname, '../../node_modules'));
  // },

  getConfig({ webpackConfig }) {
    webpackConfig.entry = {
      // 判断入口文件是.js,.jsx,.tsx
      index: path.join(__dirname, 'src', 'demo', 'index.tsx'),
    };
  },
};

const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.entry = {
      // 判断入口文件是.js,.jsx,.tsx
      index: path.join(__dirname, 'src', 'demo', 'index.tsx'),
    };
  },
};

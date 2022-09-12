const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.entry = {
      // 判断入口文件是.js,.jsx,.tsx
      index: path.join(__dirname, 'src', 'demo', 'index.tsx'),
    };

    webpackConfig.module.rules[0].include = [path.join(__dirname, 'src')];
    delete webpackConfig.module.rules[0].exclude;
    webpackConfig.module.rules[1].include = [path.join(__dirname, 'src')];
    delete webpackConfig.module.rules[1].exclude;
  },
};

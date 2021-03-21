const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.module.rules[2].include.push(/swiper.css/);
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};

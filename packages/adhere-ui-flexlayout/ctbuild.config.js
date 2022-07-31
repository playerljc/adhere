const path = require('path');

module.exports = {
  // getConfig({ webpackConfig }) {
  //   webpackConfig.resolve.modules.unshift(path.join(__dirname, '../../node_modules'));
  // },

  getConfig({ webpackConfig }) {
    webpackConfig.entry.index = path.join(__dirname, 'src', 'test', 'index.jsx');
  },
};

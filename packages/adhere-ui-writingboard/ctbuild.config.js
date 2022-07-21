const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.entry.index = path.join(__dirname, 'src', 'test', 'index.jsx');
  },
};

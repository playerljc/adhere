const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.output.libraryExport;

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    webpackConfig.module.rules[0].use[1].query.plugins.push([
      '@babel/plugin-transform-modules-commonjs',
      { strictMode: false },
    ]);
  },
};

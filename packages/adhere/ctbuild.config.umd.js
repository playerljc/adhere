const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.output.libraryExport;

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    webpackConfig.externals = {
      'antd': 'antd',
      'react': 'React',
      'react-dom':"ReactDOM",
      'moment':'moment',
    };

    webpackConfig.resolve.alias.react = path.join(
      __dirname,
      'node_modules','react'
    );

    webpackConfig.resolve.alias['react-dom'] = path.join(
      __dirname,
      'node_modules','react-dom'
    );

    webpackConfig.module.rules[0].use[1].query.plugins.push([
      '@babel/plugin-transform-modules-commonjs',
      { strictMode: false },
    ]);
  },
};

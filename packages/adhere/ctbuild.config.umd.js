const path = require('path');

const { defaultExternals } = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.output.libraryExport;

    webpackConfig.resolve.modules.unshift(path.join(__dirname, '../../node_modules'));

    webpackConfig.externals = { ...defaultExternals };

    // webpackConfig.resolve.alias.react = path.join(__dirname, 'node_modules', 'react');

    // webpackConfig.resolve.alias['react-dom'] = path.join(__dirname, 'node_modules', 'react-dom');

    webpackConfig.module.rules[0].use[1].options.plugins.push([
      '@babel/plugin-transform-modules-commonjs',
      { strictMode: false },
    ]);
  },
};

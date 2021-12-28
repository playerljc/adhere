// function isDev() {
//   const { mode } = process.env;
//
//   return mode === 'development';
// }

module.exports = {
  getConfig({ webpackConfig }) {
    // const useIndex = isDev() ? 0 : 1;
    //
    // webpackConfig.module.rules[0].use[useIndex].query.plugins.push([
    //   '@babel/plugin-transform-modules-commonjs',
    //   { strictMode: false },
    // ]);
    // webpackConfig.module.rules[0].exclude.push(/heatmap\.js/);
  },
};

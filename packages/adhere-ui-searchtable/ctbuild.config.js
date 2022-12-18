const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.entry = {
      // 判断入口文件是.js,.jsx,.tsx
      index: path.join(__dirname, 'src', 'demo', 'index.tsx'),
    };

    webpackConfig.devtool = 'cheap-module-eval-source-map';

    webpackConfig.module.rules[2].include.push(/ol.css/, /swiper.css/, /nprogress.css/);

    // TODO:umd umd的时候需要注释掉
    // babel-plugin-import的配置
    const { use } = webpackConfig.module.rules[0];

    // 在使用babel-plugin-import的时候让adhere也执行
    webpackConfig.module.rules[0].include = [path.join(__dirname, 'src'), /packages[\\/]adhere-/];
    delete webpackConfig.module.rules[0].exclude;

    webpackConfig.module.rules[1].include = [path.join(__dirname, 'src'), /packages[\\/]adhere-/];
    delete webpackConfig.module.rules[1].exclude;

    const babelLoaderConfig = use.find((loaderConfig) => {
      if (typeof loaderConfig === 'string') return false;

      if (typeof loaderConfig === 'object' && 'loader' in loaderConfig) {
        return loaderConfig.loader === 'babel-loader';
      }

      return false;
    });

    if (babelLoaderConfig) {
      babelLoaderConfig.options.plugins.push([
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          // styleLibraryDirectory: 'es',
          style: true,
        },
        'ant',
      ]);
    }
  },
};

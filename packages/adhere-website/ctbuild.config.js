const path = require('path');

const modifyVars = require('./themes/default/vars');

module.exports = {
  getTheme() {
    return modifyVars;
  },
  getConfig({ webpackConfig }) {
    // cssModules处理中添加
    // if (webpackConfig.mode === 'development') {
    webpackConfig.resolve.alias.ol = path.join(
      __dirname,
      'node_modules/@baifendian/adhere/node_modules/@baifendian/adhere-ui-olmap/node_modules/ol',
    );

    webpackConfig.resolve.alias.swiper = path.join(
      __dirname,
      'node_modules/@baifendian/adhere/node_modules/@baifendian/adhere-ui-revolving/node_modules/swiper',
    );

    // webpackConfig.resolve.alias['algebra.js'] = path.join(
    //   __dirname,
    //   'node_modules/@baifendian/adhere/node_modules/@baifendian/adhere-ui-olmap/node_modules/algebra.js',
    // );

    webpackConfig.module.rules[webpackConfig.module.rules.length - 1].include.push(
      /packages[\\/]adhere[\\/]lib[\\/].*[\\/]style[\\/]index.less/,
      /packages[\\/]adhere[\\/]lib[\\/].*.less/,
    );
    // }

    // 第三方库的引用是从文件当前目录开始搜索
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    webpackConfig.module.rules[1].include.push(/ol.css/, /swiper.css/);

    // babel-plugin-import的配置
    const { use } = webpackConfig.module.rules[0];

    const babelLoaderConfig = use.find((loaderConfig) => {
      if (typeof loaderConfig === 'string') return false;

      if (typeof loaderConfig === 'object' && 'loader' in loaderConfig) {
        return loaderConfig.loader === 'babel-loader';
      }

      return false;
    });

    if (babelLoaderConfig) {
      babelLoaderConfig.query.plugins.push(
        [
          'import',
          {
            libraryName: '@baifendian/adhere',
            transformToDefaultImport: true,
            style: true,
          },
          'adhere',
        ],
        [
          'import',
          {
            libraryName: 'antd',
            style: true,
          },
          'ant',
        ],
      );
    }

    if (webpackConfig.mode !== 'development') {
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
          ctsj: {
            test: /[\\/]node_modules[\\/](@ctsj)/,
            priority: 1,
            enforce: true,
          },
          static: {
            test: /[\\/]node_modules[\\/](lodash|_lodash|js-md5|_js-md5|classnames|_classnames|uuid|_uuid|qs|_qs|moment|axios|_axios|_cookie_js|_moment)/,
            priority: 1,
            enforce: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react-intl-universal|_react-intl-universal|react|_react|react-dom|_react-dom|react-router|_react-router|prop-types|_prop-types|history|_history)/,
            priority: 1,
            enforce: true,
          },
          antd: {
            test: /[\\/]node_modules[\\/](antd|_antd|rc|_rc)/,
            priority: 1,
            enforce: true,
          },
          echart: {
            test: /[\\/]node_modules[\\/](echarts-for-react|_echarts-for-react|echarts|_echarts)/,
            priority: 1,
            enforce: true,
          },
          ol: {
            test: /[\\/]node_modules[\\/](ol|_ol|ol-ext|_ol-ext)/,
            priority: 1,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: 0,
            enforce: true,
          },
          common: {
            priority: 4,
            minChunks: 2,
            reuseExistingChunk: true,
          },

          vendors: false,
          default: false,
        },
      };
    }
  },
};

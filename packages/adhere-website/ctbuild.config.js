const path = require('path');

const modifyVars = require('./themes/default/vars');

module.exports = {
  getTheme() {
    return modifyVars;
  },
  getConfig({ webpackConfig }) {
    // cssModules处理中添加
    // if (webpackConfig.mode === 'development') {
    // eslint-disable-next-line no-param-reassign

    // TODO:umd  umd时候需要打开
    // webpackConfig.externals = {
    //   '@baifendian/adhere': "adhere",
    //   'antd': 'antd',
    //   'react': 'React',
    //   'react-dom':"ReactDOM",
    //   'moment':'moment',
    // };

    webpackConfig.devtool = 'cheap-module-eval-source-map';

    // webpackConfig.resolve.alias['@baifendian/adhere/lib/search-table'] = path.join(
    //   __dirname,
    //   '../',
    //   'adhere-ui-searchtable',
    //   'src',
    // );

    // eslint-disable-next-line no-param-reassign
    // TODO:umd umd的时候需要注释掉
    // webpackConfig.resolve.alias.ol = path.join(
    //   __dirname,
    //   '../../node_modules/@baifendian/adhere-ui-olmap/node_modules/ol',
    // );

    // eslint-disable-next-line no-param-reassign
    // webpackConfig.resolve.alias.swiper = path.join(
    //   __dirname,
    //   '../../node_modules/@baifendian/adhere-ui-revolving/node_modules/swiper',
    // );

    // webpackConfig.resolve.alias['algebra.js'] = path.join(
    //   __dirname,
    //   'node_modules/@baifendian/adhere/node_modules/@baifendian/adhere-ui-olmap/node_modules/algebra.js',
    // );

    // 第三方库的引用是从文件当前目录开始搜索
    // webpackConfig.resolve.modules.unshift(path.join(__dirname, '../../node_modules'));

    // 这个文件不在src里也不在node_modules里，只在link的时候才会遇到这个问题(原因是node_modules里的包是link过来的)
    webpackConfig.module.rules[webpackConfig.module.rules.length - 1].exclude = [
      /packages[\\/]adhere-website[\\/]src/,
    ];
    webpackConfig.module.rules[webpackConfig.module.rules.length - 1].include.push(
      /packages[\\/]adhere[\\/]lib[\\/].*[\\/]style[\\/]index\.less/,
      /packages[\\/]adhere[\\/]lib[\\/].*\.less/,
      /packages[\\/]adhere-.{1,}[\\/]lib[\\/].*\.less/,

      /packages[\\/]adhere[\\/]es[\\/].*[\\/]style[\\/]index\.less/,
      /packages[\\/]adhere[\\/]es[\\/].*\.less/,
      /packages[\\/]adhere-.{1,}[\\/]es[\\/].*\.less/,
      // /packages[\\/]adhere-ui-searchtable[\\/]src[\\/]style[\\/]index.less/,
    );
    // }

    // 加入markdown的解析
    webpackConfig.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    webpackConfig.module.rules[2].include.push(/ol.css/, /swiper.css/, /nprogress.css/);

    // webpackConfig.module.rules[0].include = [path.join(__dirname, 'src')];

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
      babelLoaderConfig.options.plugins.push(
        [
          'import',
          {
            libraryName: '@baifendian/adhere',
            libraryDirectory: 'es',
            transformToDefaultImport: true,
            style: true,
            // styleLibraryDirectory: 'es'
          },
          'adhere',
        ],
        [
          'import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            // styleLibraryDirectory: 'es',
            style: true,
          },
          'ant',
        ],
      );
    }

    if (webpackConfig.mode === 'production') {
      webpackConfig.optimization.splitChunks = {
        // chunks: 'all',
        // minSize: 30000,
        // maxSize: 0,
        // minChunks: 1,
        // maxAsyncRequests: 5,
        // maxInitialRequests: 3,
        // automaticNameDelimiter: '~',
        // automaticNameMaxLength: 30,
        // name: true,
        chunks: 'all',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          antdesigncompatible: {
            test: /[\\/]node_modules[\\/](@ant-design[\\/]compatible|_@ant-design_compatible)/,
            priority: 1,
            enforce: true,
          },
          antdesignicons: {
            test: /[\\/]node_modules[\\/](@ant-design[\\/]icons|_@ant-design_icons)/,
            priority: 1,
            enforce: true,
          },
          echart: {
            test: /[\\/]node_modules[\\/](echarts-for-react|_echarts-for-react|echarts|_echarts)/,
            priority: 4,
            enforce: true,
          },
          ol: {
            test: /[\\/]node_modules[\\/](ol|_ol|ol-ext|_ol-ext)/,
            priority: 1,
            enforce: true,
          },
          ctsj: {
            test: /[\\/]node_modules[\\/](@ctsj)/,
            priority: 1,
            enforce: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react-intl-universal|_react-intl-universal|react|_react|react-dom|_react-dom|react-router|_react-router|prop-types|_prop-types|history|_history)/,
            priority: 1,
            enforce: true,
          },
          faker: {
            test: /[\\/]node_modules[\\/](faker|_faker)/,
            priority: 1,
            enforce: true,
          },
          antd: {
            test: /[\\/]node_modules[\\/](antd|_antd|rc|_rc)/,
            priority: 1,
            enforce: true,
          },
          static: {
            test: /[\\/]node_modules[\\/](lodash|_lodash|js-md5|_js-md5|classnames|_classnames|uuid|_uuid|qs|_qs|moment|axios|_axios|_cookie_js|_moment|swiper|_swiper)/,
            priority: 1,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: -1,
            enforce: true,
          },
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -1,
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: -1,
            reuseExistingChunk: true,
          },
          utilities: {
            priority: -1,
            minChunks: 2,
            test: /[\\/]src[\\/]components[\\/]/,
            minSize: 0,
          },
          vendors: false,
          default: false,
        },
      };
    }
  },
};

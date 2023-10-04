function isDev(mode) {
  return mode === 'development';
}

function isProd(mode) {
  return mode === 'production';
}

function chunkNameJs(arg) {
  const name = arg.chunk.name ? '[name]' : 'system';
  return isProd() ? `${name}.[chunkhash].bundle.js` : `${name}.[contenthash].bundle.js`;
}

function chunkNameCSS(arg) {
  const name = arg.chunk.name ? '[name]' : 'system';
  return isProd() ? `${name}.[chunkhash].css` : `${name}.[contenthash].css`;
}

module.exports = {
  getTheme() {
    return {};
  },
  getConfig({ webpack, webpackConfig, plugins }) {
    const publicPath = process.env.publicPath || '/';

    // TODO:umd  umd时候需要打开
    // webpackConfig.externals = {
    //   '@baifendian/adhere': "adhere",
    //   'antd': 'antd',
    //   'react': 'React',
    //   'react-dom':"ReactDOM",
    //   'moment':'moment',
    // };

    if (isDev(process.env.mode)) {
      if (publicPath !== '/') {
        webpackConfig.devServer.historyApiFallback = {
          index: `/${publicPath}/index.html`,
        };
      }
    }

    if (publicPath !== '/') {
      webpackConfig.output.publicPath = `/${publicPath}/`;
    }

    webpackConfig.output.filename = chunkNameJs;

    webpackConfig.output.chunkFilename = webpackConfig.output.filename;

    // 这块只有需要主题切换的时候才能用到
    const MiniCssExtractPluginIndex = isProd(webpackConfig.mode) ? 3 : 2;
    webpackConfig.plugins[MiniCssExtractPluginIndex] = new plugins.MiniCssExtractPlugin({
      filename: chunkNameCSS,
      chunkFilename: chunkNameCSS,
      ignoreOrder: true,
    });

    // 这个文件不在src里也不在node_modules里，只在link的时候才会遇到这个问题(原因是node_modules里的包是link过来的)
    webpackConfig.module.rules[webpackConfig.module.rules.length - 1].exclude = [
      /packages[\\/]adhere-website-mobile[\\/]src/,
    ];
    webpackConfig.module.rules[webpackConfig.module.rules.length - 1].include.push(
      /packages[\\/]adhere[\\/]lib[\\/].*[\\/]style[\\/]index\.less/,
      /packages[\\/]adhere[\\/]lib[\\/].*\.less/,
      /packages[\\/]adhere-.{1,}[\\/]lib[\\/].*\.less/,

      /packages[\\/]adhere[\\/]es[\\/].*[\\/]style[\\/]index\.less/,
      /packages[\\/]adhere[\\/]es[\\/].*\.less/,
      /packages[\\/]adhere-.{1,}[\\/]es[\\/].*\.less/,
    );

    // 变量的引入
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        CustomEvnVars: {
          mode: JSON.stringify(process.env.mode),
          environment: JSON.stringify(process.env.environment),
          publicPath: JSON.stringify(process.env.publicPath),
          router: JSON.stringify(process.env.router),
        },
      }),
    );

    webpackConfig.module.rules[2].include.push(
      /ol.css/,
      /swiper.css/,
      /global.css/,
      /nprogress.css/,
    );

    // TODO:umd umd的时候需要注释掉
    // babel-plugin-import的配置
    const { use } = webpackConfig.module.rules[0];

    // 在使用babel-plugin-import的时候让adhere也执行
    // webpackConfig.module.rules[0].include = [path.join(__dirname, 'src'), /packages[\\/]adhere-/];
    // delete webpackConfig.module.rules[0].exclude;
    //
    // webpackConfig.module.rules[1].include = [path.join(__dirname, 'src'), /packages[\\/]adhere-/];
    // delete webpackConfig.module.rules[1].exclude;

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
          },
          'adhere',
        ],
        [
          'import',
          {
            libraryName: '@baifendian/adhere-ui-anthoc',
            libraryDirectory: 'es',
            style: false,
          },
          'adhere-ui-anthoc',
        ],
        [
          'import',
          {
            libraryName: 'antd-mobile',
            libraryDirectory: 'es/components',
            style: false,
          },
          'ant-mobile',
        ],
        [
          'import',
          {
            libraryName: '@ant-design/icons',
            libraryDirectory: 'es/icons',
            camel2DashComponentName: false,
            style: false,
          },
          '@ant-design/icons',
        ],
        [
          'import',
          {
            libraryName: 'antd-mobile-icons',
            libraryDirectory: 'es',
            camel2DashComponentName: false,
            style: false,
          },
          'antd-mobile-icons',
        ],
      );
    }

    if (webpackConfig.mode === 'production') {
      webpackConfig.optimization.concatenateModules = false;
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
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
            test: /[\\/]node_modules[\\/](lodash|_lodash|js-md5|_js-md5|classnames|_classnames|uuid|_uuid|qs|_qs|dayjs|axios|_axios|_cookie_js|_dayjs|swiper|_swiper)/,
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

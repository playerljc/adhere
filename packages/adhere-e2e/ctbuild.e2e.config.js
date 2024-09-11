const modifyVars = require('./themes/default/vars');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commandArgs = require('@ctsj/build/src/commandArgs');

function isDev(mode) {
  return mode === 'development';
}

function isProd(mode) {
  return mode === 'production';
}

function getCacheGroupsName(module, chunks, cacheGroupKey) {
  return cacheGroupKey;
}

function chunkNameJs(arg) {
  const name = arg.chunk.name ? '[name]' : 'system';
  return isProd() ? `${name}.[chunkhash].bundle.js` : `${name}.[contenthash].bundle.js`;
}

function chunkNameCSS(arg) {
  const name = arg.chunk.name ? '[name]' : 'system';
  return isProd() ? `${name}.[chunkhash].css` : `${name}.[contenthash].css`;
}

function getTheme() {
  return modifyVars;
}

function getConfig({ webpackConfig, webpack, plugins }) {
  webpackConfig.output.filename = chunkNameJs;

  webpackConfig.output.chunkFilename = webpackConfig.output.filename;

  webpackConfig.plugins.shift();

  // html文件是当前目录下的index.html
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      template: path.join(__dirname, 'index.html'),
      hash: true, // 防止缓存
      minify: {
        removeAttributeQuotes: true, // 压缩 去掉引号
      },
      chunks: ['index'],
    }),
  );

  // 这块只有需要主题切换的时候才能用到
  const MiniCssExtractPluginIndex = isProd(webpackConfig.mode) ? 3 : 2;
  webpackConfig.plugins[MiniCssExtractPluginIndex] = new plugins.MiniCssExtractPlugin({
    filename: chunkNameCSS,
    chunkFilename: chunkNameCSS,
    ignoreOrder: true,
  });

  // 变量的引入
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      CustomEvnVars: {
        mode: JSON.stringify(process.env.mode),
        skin: JSON.stringify(modifyVars),
        environment: JSON.stringify(process.env.environment),
        pathgen: JSON.stringify(process.env.pathgen),
        router: JSON.stringify(process.env.router),
        mobile: JSON.stringify(process.env.mobile),
        media: JSON.stringify(process.env.media),
        publicPath: JSON.stringify(process.env.publicPath),
      },
    }),
  );

  webpackConfig.module.rules[2].include.push(
    /ol.css/,
    /font-awesome.min.css/,
    /swiper.css/,
    /nprogress.css/,
    /index.css/,
    /reset.css/,
  );

  webpackConfig.module.rules[3].include.push(path.join(__dirname, '../../packages'));

  // 寻找使用了postcss-loader的插件修改配置文件地址
  webpackConfig.module.rules
    .filter((_rule) => {
      return !!(_rule.use && Array.isArray(_rule.use) && _rule.use.length);
    })
    .forEach((_rule) => {
      _rule.use
        .filter((_use) => _use.loader === 'postcss-loader')
        .forEach((_use) => {
          _use.options.postcssOptions.config = path.join(__dirname, 'postcss.config.js');
        });
    });

  // 暗黑主题
  // const nodeModuleLessRule = webpackConfig.module.rules[webpackConfig.module.rules.length - 1];
  // nodeModuleLessRule.use[3].options.lessOptions.modifyVars = {
  //   ...nodeModuleLessRule.use[3].options.lessOptions.modifyVars,
  //   ...getThemeVariables({
  //     dark: true, // 开启暗黑模式
  //     compact: true, // 开启紧凑模式
  //   }),
  // };

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
          transformToDefaultImport: true,
          style: true,
        },
        'adhere-ui-anthoc',
      ],
      [
        'import',
        {
          libraryName: '@baifendian/adhere-mobile-ui-anthoc',
          libraryDirectory: 'es',
          transformToDefaultImport: true,
          style: true,
        },
        'adhere-mobile-ui-anthoc',
      ],
      [
        'import',
        {
          libraryName: '@baifendian/adhere-ui-richtext-sandbox',
          libraryDirectory: 'es',
          transformToDefaultImport: true,
          style: true,
        },
        'adhere-ui-richtext-sandbox',
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
      [
        'import',
        {
          libraryName: 'antd-mobile',
          libraryDirectory: 'es/components',
          style: false,
        },
        'ant-mobile',
      ],
    );
  }

  // split
  if (webpackConfig.mode === 'production') {
    webpackConfig.optimization.concatenateModules = false;
    webpackConfig.optimization.splitChunks = {
      chunks: 'all',
      minSize: 30000,
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
          name: getCacheGroupsName,
        },
        antdesignicons: {
          test: /[\\/]node_modules[\\/](@ant-design[\\/]icons|_@ant-design_icons)/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        adhere: {
          test: /[\\/]node_modules[\\/](@baifendian[\\/]adhere)/,
          priority: 2,
          enforce: true,
          name: getCacheGroupsName,
        },
        faker: {
          test: /[\\/]node_modules[\\/]faker/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        corejs: {
          test: /[\\/]node_modules[\\/]core-js/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        babel: {
          test: /[\\/]node_modules[\\/]@babel/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        moment: {
          test: /[\\/]node_modules[\\/]moment/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        zrender: {
          test: /[\\/]node_modules[\\/]zrender/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        lodash: {
          test: /[\\/]node_modules[\\/]lodash/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        validator: {
          test: /[\\/]node_modules[\\/]validator/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        echart: {
          test: /[\\/]node_modules[\\/](echarts-for-react|_echarts-for-react|echarts|_echarts)/,
          priority: 4,
          enforce: true,
          name: getCacheGroupsName,
        },
        ol: {
          test: /[\\/]node_modules[\\/](ol|_ol|ol-ext|_ol-ext)/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        ctsj: {
          test: /[\\/]node_modules[\\/](@ctsj)/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        react: {
          test: /[\\/]node_modules[\\/](react-intl-universal|_react-intl-universal|react|_react|react-dom|_react-dom|react-router|_react-router|prop-types|_prop-types|history|_history)/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        antd: {
          test: /[\\/]node_modules[\\/](antd|_antd|rc|_rc)/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        static: {
          test: /[\\/]node_modules[\\/](js-md5|_js-md5|classnames|_classnames|uuid|_uuid|qs|_qs|axios|_axios|_cookie_js|swiper|_swiper|iscroll)/,
          priority: 1,
          enforce: true,
          name: getCacheGroupsName,
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          priority: -1,
          enforce: true,
          name: getCacheGroupsName,
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -1,
          reuseExistingChunk: true,
          name: getCacheGroupsName,
        },
        common: {
          priority: -1,
          minChunks: 2,
          reuseExistingChunk: true,
          name: getCacheGroupsName,
        },
        utilities: {
          priority: -1,
          minChunks: 2,
          test: /[\\/]src[\\/](components|Components|lib|util|service|config)[\\/]/,
          name: getCacheGroupsName,
        },
        vendors: false,
        default: false,
      },
    };
  }
}

module.exports = {
  getTheme() {
    return getTheme();
  },
  getConfig(config) {
    getConfig(config);

    const { webpackConfig } = config;

    const cwd = commandArgs.toCommandArgs(process.argv[8]).get('runtimepath');

    const e2ePath = path.join(cwd, 'e2e');

    const srcPath = path.join(cwd, 'src');

    // 主入口文件是每个package的e2e/index.jsx
    webpackConfig.entry.index = path.join(e2ePath, 'index.jsx');

    webpackConfig.module.rules[0].include = [e2ePath, srcPath];
    webpackConfig.module.rules[1].include = [e2ePath, srcPath];
    // webpackConfig.module.rules[1].use.find((l) => l.loader === 'ts-loader').options.configFile =
    //   path.join(__dirname, 'tsconfig.e2e.json');

    webpackConfig.module.rules[2].include.push(e2ePath, srcPath);
    webpackConfig.module.rules[3].include.push(e2ePath, srcPath);

    webpackConfig.resolve.alias['@'] = e2ePath;
  },
};

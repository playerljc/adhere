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
    webpackConfig.optimization.usedExports = true;
    webpackConfig.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        // 通用的 node_modules 模块打包
        vendor: {
          test: (module) => {
            return (
              module.resource &&
              module.resource.includes('node_modules') &&
              !module.resource.includes('@baifendian\\adhere') &&
              !module.resource.includes('@baifendian/adhere')
            );
          },
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor/npm.${packageName.replace('@', '')}`;
          },
        },
        // 单独打包 @baifendian/adhere
        baifendianAdhere: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@baifendian\\adhere') ||
              module.resource.includes('node_modules/@baifendian/adhere')) &&
            !module.resource.includes('node_modules/@baifendian/adhere-ui-olmap') &&
            !module.resource.includes('node_modules\\@baifendian\\adhere-ui-olmap') &&
            !module.resource.includes('node_modules/@baifendian/adhere-ui-searchtable') &&
            !module.resource.includes('node_modules\\@baifendian\\adhere-ui-searchtable') &&
            !module.resource.includes('node_modules/@baifendian/adhere-util-resource') &&
            !module.resource.includes('node_modules\\@baifendian\\adhere-util-resource') &&
            !module.resource.includes('node_modules/@baifendian/adhere-ui-anthoc') &&
            !module.resource.includes('node_modules\\@baifendian\\adhere-ui-anthoc') &&
            !module.resource.includes('node_modules/@baifendian/adhere-mobile-ui-anthoc') &&
            !module.resource.includes('node_modules\\@baifendian\\adhere-mobile-ui-anthoc') &&
            !module.resource.includes('node_modules/@baifendian/adhere-ui-richtext-sandbox') &&
            !module.resource.includes('node_modules\\@baifendian\\adhere-ui-richtext-sandbox'),
          name: 'vendor/npm.baifendian-adhere',
          chunks: 'all',
        },
        baifendianAdhereUiOLMap: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@baifendian\\adhere-ui-olmap') ||
              module.resource.includes('node_modules/@baifendian/adhere-ui-olmap')),
          name: 'vendor/npm.baifendian-adhere-ui-olmap',
          chunks: 'all',
        },
        baifendianAdhereUiSearchTable: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@baifendian\\adhere-ui-searchtable') ||
              module.resource.includes('node_modules/@baifendian/adhere-ui-searchtable')),
          name: 'vendor/npm.baifendian-adhere-ui-searchtable',
          chunks: 'all',
        },
        baifendianAdhereUtilResource: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@baifendian\\adhere-util-resource') ||
              module.resource.includes('node_modules/@baifendian/adhere-util-resource')),
          name: 'vendor/npm.baifendian-adhere-util-resource',
          chunks: 'all',
        },
        baifendianAdhereUiAnthoc: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@baifendian\\adhere-ui-anthoc') ||
              module.resource.includes('node_modules/@baifendian/adhere-ui-anthoc')),
          name: 'vendor/npm.baifendian-adhere-ui-anthoc',
          chunks: 'all',
        },
        baifendianAdhereMobileUiAnthoc: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@baifendian\\adhere-mobile-ui-anthoc') ||
              module.resource.includes('node_modules/@baifendian/adhere-mobile-ui-anthoc')),
          name: 'vendor/npm.baifendian-adhere-mobile-ui-anthoc',
          chunks: 'all',
        },
        baifendianAdhereUiRichtextSandbox: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@baifendian\\adhere-ui-richtext-sandbox') ||
              module.resource.includes('node_modules/@baifendian/adhere-ui-richtext-sandbox')),
          name: 'vendor/npm.baifendian-adhere-ui-richtext-sandbox',
          chunks: 'all',
        },
        antDesignIcons: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\@ant-design/icons') ||
              module.resource.includes('node_modules/@ant-design/icons')),
          name: 'vendor/npm.ant-design-icons',
          chunks: 'all',
        },
        antdMobileIcons: {
          test: (module) =>
            module.resource &&
            (module.resource.includes('node_modules\\antd-mobile-icons') ||
              module.resource.includes('node_modules/antd-mobile-icons')),
          name: 'vendor/npm.antd-mobile-icons',
          chunks: 'all',
        },
        locales: {
          test: (module) => module.resource && module.resource.includes('locales'),
          name(module) {
            const fileName = path.basename(module.resource, '.js');
            return `locales/locales.${fileName}`;
          },
          chunks: 'all',
          enforce: true,
          priority: 20,
        },
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

    // // 避免 React 19 下 rc-trigger(findDOMNode) 引发的告警：将 rc-color-picker 指向本地 shim
    // webpackConfig.resolve.alias['rc-color-picker'] = path.join(
    //   __dirname,
    //   'src/shims/rc-color-picker.js',
    // );
    //
    // // 避免样式从 rc-color-picker/assets 引入，指向空样式
    // webpackConfig.resolve.alias['rc-color-picker/assets/index.css'] = path.join(
    //   __dirname,
    //   'src/shims/empty.css',
    // );
  },
};

const modifyVars = require('./themes/default/vars');
const path = require('path');

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
    return modifyVars;
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

    webpackConfig.externals = {
      '@/constent': 'Constent',
    };

    // 这块只有需要主题切换的时候才能用到
    const MiniCssExtractPluginIndex = isProd(webpackConfig.mode) ? 3 : 2;
    webpackConfig.plugins[MiniCssExtractPluginIndex] = new plugins.MiniCssExtractPlugin({
      filename: chunkNameCSS,
      chunkFilename: chunkNameCSS,
      ignoreOrder: true,
    });

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
    );

    // 强制将 react 与 react-dom 解析到顶层 node_modules，避免多份 React 导致运行时报错
    webpackConfig.resolve = webpackConfig.resolve || {};
    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      react: path.resolve(__dirname, '../../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
    };

    // 变量的引入
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        CustomEvnVars: {
          mode: JSON.stringify(process.env.mode),
          environment: JSON.stringify(process.env.environment),
          publicPath: JSON.stringify(process.env.publicPath),
          router: JSON.stringify(process.env.router),
          media: JSON.stringify(process.env.media),
        },
      }),
    );

    webpackConfig.module.rules[2].include.push(
      /ol.css/,
      /swiper.css/,
      /nprogress.css/,
      /index.css/,
    );

    webpackConfig.module.rules[3].use.push({
      loader: '@ctsj/less-media-query-loader',
    });

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
            transformToDefaultImport: true,
            style: true,
          },
          'adhere-ui-anthoc',
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
              // console.log('module.resource===', module.resource);
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
  },
};

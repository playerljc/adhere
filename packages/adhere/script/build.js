const path = require('path');
const fs = require('fs');

const args = require('./commandArgs');
const packageJSON = require('../package.json');

const { dependencies } = packageJSON;

const contextPath = path.join(__dirname, '../', 'src');

const excludes = ['@baifendian/adhere-ui-css'];

const indexLessContent = [];
const indexJsContent = [];
const indexJsExportContent = ['export { \r\n'];

const type = args.getArg('module');

const namedMap = new Map([
  ['@baifendian/adhere-ui-conditionalrender', 'ConditionalRender'],
  ['@baifendian/adhere-ui-confirm-delconfirm', 'DelConfirm'],
  ['@baifendian/adhere-ui-confirm-importantconfirm', 'ImportantConfirm'],
  ['@baifendian/adhere-ui-globalindicator', 'GlobalIndicator'],
  ['@baifendian/adhere-ui-historyback', 'HistoryBack'],
  ['@baifendian/adhere-ui-hooks', 'Hooks'],
  ['@baifendian/adhere-ui-imagelazy', 'ImageLazy'],
  ['@baifendian/adhere-ui-messagedialog', 'MessageDialog'],
  ['@baifendian/adhere-ui-olmap', 'OLMap'],
  ['@baifendian/adhere-ui-permission', 'Permission'],
  ['@baifendian/adhere-ui-prompt-errorprompt', 'ErrorPrompt'],
  ['@baifendian/adhere-ui-prompt-successprompt', 'SuccessPrompt'],
  ['@baifendian/adhere-ui-prompt-warnprompt', 'WarnPrompt'],
  ['@baifendian/adhere-ui-space', 'Space'],
  ['@baifendian/adhere-ui-spin', 'Spin'],
  ['@baifendian/adhere-ui-split', 'Split'],
  ['@baifendian/adhere-ui-suspense', 'Suspense'],
  ['@baifendian/adhere-ui-tableheadsearch', 'TableHeadSearch'],
  ['@baifendian/adhere-ui-flexlayout', 'FlexLayout'],
  ['@baifendian/adhere-ui-splitlayout', 'SplitLayout'],
  ['@baifendian/adhere-ui-stickuplayout', 'StickupLayout'],
  ['@baifendian/adhere-ui-surnames', 'Surnames'],
  ['@baifendian/adhere-ui-sliderscale', 'SliderScale'],
  ['@baifendian/adhere-ui-revolving', 'Revolving'],
  ['@baifendian/adhere-ui-scrollload', 'ScrollLoad'],
  ['@baifendian/adhere-ui-jdcategorytab', 'JdCategoryTab'],
  ['@baifendian/adhere-ui-cascadecompared', 'CascadeCompared'],
  ['@baifendian/adhere-ui-slidelayout', 'SlideLayout'],
  ['@baifendian/adhere-ui-contextmenu', 'ContextMenu'],
  ['@baifendian/adhere-ui-fontsizesetting', 'FontSizeSetting'],
  ['@baifendian/adhere-ui-searchtable', 'SearchTable'],
  ['@baifendian/adhere-ui-searchlist', 'SearchList'],
  // ['@baifendian/adhere-ui-g6', 'G6'],
  ['@baifendian/adhere-ui-formitemcreator', 'FormItemCreator'],
  ['@baifendian/adhere-ui-tablelist', 'TableList'],
  ['@baifendian/adhere-ui-popup', 'Popup'],
  ['@baifendian/adhere-ui-backtopanimation', 'BackTopAnimation'],
  ['@baifendian/adhere-ui-pullrefresh', 'PullRefresh'],
  ['@baifendian/adhere-ui-notification', 'Notification'],
  ['@baifendian/adhere-ui-swipeout', 'SwipeOut'],
  ['@baifendian/adhere-ui-polygonselection', 'PolygonSelection'],
  ['@baifendian/adhere-ui-playground', 'PlayGround'],
  ['@baifendian/adhere-ui-tablegridlayout', 'TableGridLayout'],
  ['@baifendian/adhere-ui-writingboard', 'WritingBoard'],
  ['@baifendian/adhere-ui-contourblock', 'ContourBlock'],
  ['@baifendian/adhere-ui-datedisplay', 'DateDisplay'],
  ['@baifendian/adhere-ui-comment', 'Comment'],
  ['@baifendian/adhere-ui-bmap', 'BMap'],
  ['@baifendian/adhere-ui-forceupdate', 'ForceUpdate'],
  ['@baifendian/adhere-ui-configprovider', 'ConfigProvider'],
  ['@baifendian/adhere-ui-fieldgeneratortodict', 'FieldGeneratorToDict'],
  ['@baifendian/adhere-ui-ellipsis', 'Ellipsis'],
  ['@baifendian/adhere-ui-expression', 'Expression'],
  ['@baifendian/adhere-util', 'Util'],
  ['@baifendian/adhere-util-communication-ajax', 'Ajax'],
  ['@baifendian/adhere-util-decorators', 'Decorators'],
  ['@baifendian/adhere-util-dict', 'Dict'],
  ['@baifendian/adhere-util-emitter', 'Emitter'],
  ['@baifendian/adhere-util-intl', 'Intl'],
  ['@baifendian/adhere-util-notnull', 'NotNull'],
  ['@baifendian/adhere-util-preferences', 'Preferences'],
  ['@baifendian/adhere-util-resource', 'Resource'],
  ['@baifendian/adhere-util-adapterscreen', 'AdapterScreen'],
  ['@baifendian/adhere-util-watchmemoized', 'WatchMemoized'],
  ['@baifendian/adhere-util-domain', 'Domain'],
  ['@baifendian/adhere-util-browsersniff', 'Browsersniff'],
  ['@baifendian/adhere-util-validator', 'Validator'],
  ['@baifendian/adhere-util-reactutil', 'ReactUtil'],
  ['@baifendian/adhere-util-iframeio', 'IframeIO'],
  ['@baifendian/adhere-mobile-ui-prompt-errorprompt', 'MobileErrorPrompt'],
  ['@baifendian/adhere-mobile-ui-prompt-successprompt', 'MobileSuccessPrompt'],
  ['@baifendian/adhere-mobile-ui-prompt-warnprompt', 'MobileWarnPrompt'],
  ['@baifendian/adhere-mobile-ui-globalindicator', 'MobileGlobalIndicator'],
  ['@baifendian/adhere-mobile-ui-confirm-delconfirm', 'MobileDelConfirm'],
  ['@baifendian/adhere-mobile-ui-confirm-importantconfirm', 'MobileImportantConfirm'],
  ['@baifendian/adhere-mobile-ui-tabs', 'MobileTabs'],
  ['@baifendian/adhere-mobile-ui-time-picker-view', 'MobileTimePickerView'],
]);

/**
 * pascalCaseToKebabCase
 * @param name
 * @return {string}
 */
function pascalCaseToKebabCase(name) {
  const result = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
  return (result.startsWith('-') ? result.substring(1) : result).toLowerCase();
}

// let dependenciesAll = {};

// eslint-disable-next-line guard-for-in,no-restricted-syntax
for (const packageName in dependencies) {
  // eslint-disable-next-line no-continue
  if (!packageName.startsWith('@baifendian')) continue;

  const packagesPath = path.join(__dirname, '../../');

  const name = packageName.split('/')[1];

  // const json = require(path.join(packagesPath, name, 'package.json'));
  // dependenciesAll = { ...dependenciesAll, ...json.dependencies };

  // 不排除
  if (excludes.indexOf(packageName) === -1) {
    const exportName = namedMap.get(packageName);

    const folderName = pascalCaseToKebabCase(namedMap.get(packageName)); // name.substring(name.lastIndexOf('-') + 1);

    const folderPath = path.join(contextPath, folderName);

    const indexPath = path.join(folderPath, 'index.js');

    const stylePath = path.join(folderPath, 'style');

    const styleIndexPath = path.join(stylePath, 'index.less');

    // 不存在
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // index.js写入文件
    fs.writeFileSync(
      indexPath,
      `import Model from '${packageName}/${type}';\r\nexport default Model;`,
    );

    if (!fs.existsSync(stylePath)) {
      // 不存在
      fs.mkdirSync(stylePath);
    }

    // 查看packages中是否存在index.less
    if (fs.existsSync(path.join(packagesPath, name, 'src', 'index.less'))) {
      // index.less写入文件
      fs.writeFileSync(styleIndexPath, `@import '~${packageName}/${type}/index.less';`);
      indexLessContent.push(`@import '~${packageName}/${type}/index.less';\r\n`);
    } else {
      fs.writeFileSync(styleIndexPath, '');
    }

    indexJsContent.push(`import ${exportName} from '${packageName}';\r\n`);
    indexJsExportContent.push(`  ${exportName},\r\n`);
    // 查看packages中是否存在antd.less
    // if (fs.existsSync(path.join(packagesPath, name, 'src', 'antd.less'))) {
    //   // 读取antd.less文件内容
    //   const content = fs.readFileSync(path.join(packagesPath, name, 'src', 'antd.less'));
    //   // 追加到index.less文件中
    //   fs.appendFileSync(styleIndexPath, content);
    // }
  } else {
    // 排除的包
    // eslint-disable-next-line no-lonely-if
    if (packageName === '@baifendian/adhere-ui-css') {
      const cssPackagePath = path.join(packagesPath, name, 'src');

      const result = fs.readdirSync(cssPackagePath);

      result.forEach((fileName) => {
        const stat = fs.statSync(path.join(cssPackagePath, fileName));
        if (stat.isFile() && fileName !== 'index.js') {
          const content = fs.readFileSync(path.join(cssPackagePath, fileName));
          fs.writeFileSync(path.join(contextPath, fileName), content);
        }
      });
    }
  }
}

const indexLessPath = path.join(__dirname, '../src', 'index.less');
const lessContent = fs.readFileSync(indexLessPath);
fs.writeFileSync(indexLessPath, `${lessContent}\r\n${indexLessContent.join('')}`);

const indexJsPath = path.join(__dirname, '../src', 'index.ts');
indexJsExportContent.push('};\r\n');
fs.writeFileSync(indexJsPath, `${indexJsContent.join('')}\r\n${indexJsExportContent.join('')}`);

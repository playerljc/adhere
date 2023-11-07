import { theme } from 'antd';
import tinyColor from 'tinycolor2';

import { Preferences, Util } from '@baifendian/adhere';

/**
 * setCssVariable
 * @description 设置css变量
 * @param {string} varName 这个变量 xxx-xxx-xxx 类型
 */
function setCssVariable(varName) {
  // 小写驼峰
  // 例子: adhereColorPrimary
  const varCamelCaseName = Util.toCamelCase(varName, '-');
  // 大写驼峰
  // 例子: AdhereColorPrimary
  const varUpperCamelCaseName = Util.toCamelCase(varName, '-', true);

  if (varCamelCaseName in cssVars) return;

  const entryValue = themes.get(varName);

  // 定义驼峰变量
  Object.defineProperty(cssVars, varCamelCaseName, {
    set(value) {
      // --------------定义css变量 -------------
      document.documentElement.style.setProperty(`--${varName}`, value);

      // 是颜色需要在定义一个-rgb的变量
      const color = tinyColor(value);

      if (color.isValid()) {
        const rgb = color.toRgb();

        document.documentElement.style.setProperty(
          `--${varName}-rgb`,
          `${[rgb.r, rgb.g, rgb.b].join(',')}`,
        );
      }

      // 处理mapToken
      if (!entryValue?.mapToken) return;
      Array.from(entryValue?.mapToken?.keys?.())?.forEach?.((mapTokenVarName) => {
        const mapTokenVEntryValue = entryValue?.mapToken?.get?.(mapTokenVarName);

        if (mapTokenVEntryValue?.alpha) {
          color.setAlpha(Number.parseFloat(mapTokenVEntryValue?.alpha));

          document.documentElement.style.setProperty(
            `--${mapTokenVarName}`,
            color.toPercentageRgbString(),
          );
        }

        if (mapTokenVEntryValue.calc) {
          document.documentElement.style.setProperty(
            `--${mapTokenVarName}`,
            `calc(${value} ${mapTokenVEntryValue.calc})`,
          );
        }
      });
    },
  });

  // 定义导出变量
  exportObj[`set${varUpperCamelCaseName}`] = (value) => {
    cssVars[varCamelCaseName] = value;
    Preferences.putStringByLocal(varUpperCamelCaseName, value);
  };

  // 定义导出变量
  exportObj[`get${varUpperCamelCaseName}`] = () =>
    document.documentElement.style.getPropertyValue(`--${varName}`);
}

/**
 * init
 */
function init(curTheme) {
  // 主题的变量
  const mapToken = (themes.get(curTheme) ?? themes.get('default')).mapToken;

  // 主题的变量
  Object.keys(mapToken).forEach((_key) => {
    // colorPrimary
    const varName = Util.capitalized(Util.toCamelCase(_key, '-', true));

    exportObj[`setAntd${varName}`](mapToken[_key]);
  });

  Object.keys(designToken).forEach((_key) => {
    // colorPrimary
    const varName = Util.capitalized(Util.toCamelCase(_key, '-', true));

    exportObj[`setAntd${varName}`](designToken[_key]);
  });
}

const { getDesignToken, defaultAlgorithm, defaultSeed, darkAlgorithm } = theme;

const designToken = getDesignToken();

const themes = new Map([
  [
    // 缺省主题
    'default',
    {
      // 算法(antd)
      algorithm: theme.defaultAlgorithm,
      // 算法对用的mapToken(antd)
      mapToken: defaultAlgorithm(defaultSeed),
    },
  ],
  [
    // 暗黑主题
    'dark',
    {
      algorithm: theme.darkAlgorithm,
      mapToken: darkAlgorithm(defaultSeed),
    },
  ],
]);

// 当前变量
const cssVars = {};

// 导出对象
const exportObj = {};

/**
 * antdThemeToCssVariable
 * @param curTheme
 */
export function antdThemeToCssVariable(curTheme) {
  const antdKeys = Object.keys(themes.get('default').mapToken);
  const antdDesignKeys = Object.keys(designToken);

  /* 全局的css Vars*/
  [...antdKeys, ...antdDesignKeys]
    .map((_key) => Util.pascalCaseToKebabCase2(`antd${Util.capitalized(_key)}`))
    .forEach((varName) => {
      setCssVariable(varName);
    });

  init(curTheme);
}

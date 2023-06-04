import { theme } from 'antd';
import tinyColor from 'tinycolor2';

import { Util } from '@baifendian/adhere';

import DarkTheme from './dark/vars';
import DefaultTheme from './default/vars';

const { darkAlgorithm, defaultAlgorithm, defaultSeed } = theme;

/**
 * themes
 */
const themes = new Map([
  [
    // 缺省主题
    'default',
    {
      algorithm: theme.defaultAlgorithm,
      token: DefaultTheme,
      mapToken: defaultAlgorithm(defaultSeed),
    },
  ],
  [
    // 暗黑主题
    'dark',
    {
      algorithm: theme.darkAlgorithm,
      token: DarkTheme,
      mapToken: darkAlgorithm(defaultSeed),
    },
  ],
]);

// 当前变量
const cssVars = {};

// 导出对象
const exportObj = {};

// 当前主题
let currentTheme = 'default';

/**
 * setCssVariable
 * @description 设置css变量
 * @param {string} varName
 */
const setCssVariable = (varName) => {
  const varCamelCaseName = Util.toCamelCase(varName);
  const varUpperCamelCaseName = Util.toCamelCase(varName, true);

  if (varCamelCaseName in cssVars) return;

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
    },
  });

  // 定义导出变量
  exportObj[`set${varUpperCamelCaseName}`] = (value) => {
    cssVars[varCamelCaseName] = value;
  };

  // 定义导出变量
  exportObj[`get${varUpperCamelCaseName}`] = () =>
    document.documentElement.style.getPropertyValue(`--${varName}`);
};

(function () {
  const hostKeys = Object.keys(DefaultTheme);
  const antdKeys = Object.keys(themes.get('default').mapToken);

  /* 全局的css Vars*/
  [
    ...hostKeys,
    ...antdKeys.map((_key) => Util.pascalCaseToKebabCase(`antd${Util.capitalized(_key)}`)),
  ].forEach((varName) => {
    setCssVariable(varName);
  });
})();

/**
 * init
 * @description 初始化
 * @param theme
 */
const init = (theme) => {
  // 主题的变量
  const token = (themes.get(theme) ?? themes.get('default')).token;
  const mapToken = (themes.get(theme) ?? themes.get('default')).mapToken;

  console.log(exportObj);

  Object.keys(token).forEach((_key) => {
    const varName = Util.toCamelCase(_key, true);

    exportObj[`set${varName}`](token[_key]);
  });

  Object.keys(mapToken).forEach((_key) => {
    // colorPrimary
    const varName = Util.capitalized(Util.toCamelCase(_key, true));

    exportObj[`setAntd${varName}`](mapToken[_key]);
  });
};

/**
 * setTheme
 * @description 设置主题
 * @param theme
 */
export function setTheme(theme) {
  init(theme);
  currentTheme = theme;
}

/**
 * getTheme
 * @description 获取主题
 * @return {string}
 */
export function getThemeKey() {
  return currentTheme;
}

/**
 * getThemeValue
 * @description 获取主题对用的变量值
 * @return {object}
 */
export function getThemeValue() {
  return themes.get(currentTheme);
}

/**
 * getThemeKeys
 * @description 获取主题keys
 * @return {string []}
 */
export function getThemeKeys() {
  return Array.from(themes.keys());
}

export default exportObj;

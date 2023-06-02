import { theme } from 'antd';
import tinyColor from 'tinycolor2';

import { Util } from '@baifendian/adhere';

import DarkTheme from './dark/vars';
import DefaultTheme from './default/vars';

const { darkAlgorithm, defaultAlgorithm, defaultSeed } = theme;

const themes = new Map([
  [
    'default',
    {
      algorithm: theme.defaultAlgorithm,
      token: DefaultTheme,
      mapToken: defaultAlgorithm(defaultSeed),
    },
  ],
  [
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

const keys = Object.keys(DefaultTheme);

/* 全局的css Vars*/
keys.forEach((varName) => {
  const varCamelCaseName = Util.toCamelCase(varName);
  const varUpperCamelCaseName = Util.toCamelCase(varName, true);

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
  exportObj[`get${varUpperCamelCaseName}`] = () => cssVars[varCamelCaseName];
});

/**
 * init
 * @description 初始化
 * @param theme
 */
const init = (theme) => {
  // 主题的变量
  const vars = (themes.get(theme) ?? themes.get('default')).token;

  Object.keys(vars).forEach((_key) => {
    const varName = Util.toCamelCase(_key, true);

    exportObj[`set${varName}`](vars[_key]);
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
 */
export function getThemeKey() {
  return currentTheme;
}

export function getThemeValue() {
  return themes.get(currentTheme);
}

export function getThemeKeys() {
  return Array.from(themes.keys());
}

export default exportObj;

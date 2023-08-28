import { theme } from 'antd';
import tinyColor from 'tinycolor2';

import { Emitter, Preferences, Util } from '@baifendian/adhere';

import DarkTheme from './dark/vars';
import DefaultTheme from './default/vars';

const { getDesignToken, darkAlgorithm, defaultAlgorithm, defaultSeed } = theme;

const designToken = getDesignToken();

/**
 * themes
 */
const themes = new Map([
  [
    // 缺省主题
    'default',
    {
      // 算法(antd)
      algorithm: theme.defaultAlgorithm,
      // 宿主工程的token
      token: DefaultTheme,
      // 算法对用的mapToken(antd)
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
 * @param {string} varName 这个变量 xxx-xxx-xxx 类型
 */
const setCssVariable = (varName) => {
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
};

/**
 * init
 * @description 初始化
 * @param {string} theme
 * @param {boolean} useStore 是否使用持久化
 */
const init = (theme, useStore) => {
  // 主题的变量
  const token = (themes.get(theme) ?? themes.get('default')).token;
  const mapToken = (themes.get(theme) ?? themes.get('default')).mapToken;

  Array.from(token.keys()).forEach((_key) => {
    const varName = Util.toCamelCase(_key, '-', true);

    const varValue = token.get(_key).value;

    const defaultValue = useStore ? Preferences.getStringByLocal(varName) : varValue;

    exportObj[`set${varName}`](defaultValue ?? varValue);
  });

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
};

/**
 * changeTheme
 * @description 切换主题
 * @param theme
 */
export function changeTheme(theme) {
  init(theme, false);
  currentTheme = theme;
  Preferences.putStringByLocal('theme', theme);
  Emitter.trigger('SystemThemeChange');
}

/**
 * selectTheme
 * @description 选择主题
 * @param theme
 */
export function selectTheme(theme) {
  init(theme, true);
  currentTheme = theme;
  Preferences.putStringByLocal('theme', theme);
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

(function () {
  const hostKeys = Array.from(DefaultTheme.keys());
  const antdKeys = Object.keys(themes.get('default').mapToken);
  const antdDesignKeys = Object.keys(designToken);

  /* 全局的css Vars*/
  [
    ...hostKeys,
    ...[...antdKeys, ...antdDesignKeys].map((_key) =>
      Util.pascalCaseToKebabCase(`antd${Util.capitalized(_key)}`),
    ),
  ].forEach((varName) => {
    setCssVariable(varName);
  });
})();

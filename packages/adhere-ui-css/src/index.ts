import tinyColor from 'tinycolor2';

import Util from '@baifendian/adhere-util';

const defaultThemeMap = new Map<string, any>([
  // 品牌颜色
  [
    'adhere-color-primary',
    {
      value: '#2480ff',
    },
  ],
  // 主文字颜色
  [
    'adhere-color-text-base',
    {
      value: '#000',
      mapToken: new Map([
        // 最深的文本色
        ['adhere-color-text', { alpha: '0.88' }],
        // 第二级文本
        ['adhere-color-text-secondary', { alpha: '0.65' }],
        // 第三级文本
        ['adhere-color-text-tertiary', { alpha: '0.45' }],
        // 第四级
        ['adhere-color-text-quaternary', { alpha: '0.25' }],
      ]),
    },
  ],
  // 主背景颜色
  [
    'adhere-color-bg-base',
    {
      value: '#fff',
    },
  ],
  // 主边框颜色
  [
    'adhere-color-border-base',
    {
      value: '#d9d9d9',
    },
  ],
  // 主分割线颜色
  [
    'adhere-color-split-base',
    {
      value: '#f0f0f0',
    },
  ],
  // 主字体大小
  [
    'adhere-font-size-base',
    {
      value: '14px',
      mapToken: new Map([
        [
          'adhere-font-size-lg',
          {
            calc: ' + 2px',
          },
        ],
        [
          'adhere-font-size-sm',
          {
            calc: '- 2px',
          },
        ],
        [
          'adhere-font-size-xl',
          {
            calc: '+ 6px',
          },
        ],
      ]),
    },
  ],
  // 主层级最大值
  [
    'adhere-z-index-max-base',
    {
      value: '1999',
    },
  ],
  // 主圆角大小
  [
    'adhere-border-radius-base',
    {
      value: '6px',
    },
  ],
  // 用于控制组件边框、分割线等的宽度
  [
    'adhere-line-width',
    {
      value: '1px',
    },
  ],
  // 用于控制组件边框、分割线等的样式，默认是实线
  [
    'adhere-line-type',
    {
      value: 'solid',
    },
  ],
]);

// 当前变量
const cssVars = {};

const exportObj = {};

(function () {
  const keys = Array.from(defaultThemeMap.keys());

  keys.forEach((varName) => {
    // 小写的驼峰
    // 例子: adhereColorPrimary
    const varCamelCaseName = Util.toCamelCase(varName, '-');
    // 大写的驼峰
    // 例子: AdhereColorPrimary
    const varUpperCamelCaseName = Util.toCamelCase(varName, '-', true);

    const entryValue = defaultThemeMap.get(varName);

    // cssVars定义驼峰变量
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
    };

    // 定义导出变量
    exportObj[`get${varUpperCamelCaseName}`] = () =>
      document.documentElement.style.getPropertyValue(`--${varName}`);
  });
})();

/**
 * theme
 * {
 *   colorPrimary
 * }
 * @param theme
 */
export default (theme) => {
  // primaryColor

  // setAdherePrimaryColor(theme?.primaryColor ?? defaultTheme.primaryColor);
  // setAdhereNormalColor(theme?.normalColor ?? defaultTheme.normalColor);
  // setAdhereBlackColor(theme?.backColor ?? defaultTheme.blackColor);
  // setAdhereBaseFontSize(theme?.baseFontSize ?? defaultTheme.baseFontSize);
  // setAdhereSmallFontSize(theme?.smallFontSize ?? defaultTheme.smallFontSize);
  // setAdhereCommonMaxZIndex(theme?.commonMaxZIndex ?? defaultTheme.commonMaxZIndex);
  const curTheme = theme ?? {};

  Array.from(defaultThemeMap.keys()).forEach((varName) => {
    // varName === adhere-color-primary

    // AdhereColorPrimary
    const varCamelCaseName = Util.toCamelCase(varName, '-', true);

    // ColorPrimary
    const inputName = Util.lowercaseInitial(
      varCamelCaseName.substring(varCamelCaseName.indexOf('Adhere') + 'Adhere'.length),
    );

    exportObj?.[`set${varCamelCaseName}`]?.(
      curTheme[inputName] ?? defaultThemeMap.get(varName)?.value,
    );
  });
};

// export default exportObj;

/* 全局的css Vars*/
// const cssVars = {
//   /**
//    * 品牌主颜色
//    * @param value
//    */
//   set adherePrimaryColor(value) {
//     const _tinyColor = tinyColor(value);
//     const rgb = _tinyColor.toRgb();
//
//     document.documentElement.style.setProperty('--adhere-primary-color', value);
//     document.documentElement.style.setProperty(
//       '--adhere-primary-color-rgb',
//       `${[rgb.r, rgb.g, rgb.b].join(',')}`,
//     );
//   },
//   /**
//    * 缺省的颜色
//    * @param value
//    */
//   set adhereNormalColor(value) {
//     const _tinyColor = tinyColor(value);
//     const rgb = _tinyColor.toRgb();
//
//     document.documentElement.style.setProperty('--adhere-normal-color', value);
//     document.documentElement.style.setProperty(
//       '--adhere-normal-color-rgb',
//       `${[rgb.r, rgb.g, rgb.b].join(',')}`,
//     );
//   },
//   /**
//    * 黑色
//    * @param value
//    */
//   set adhereBlackColor(value) {
//     const _tinyColor = tinyColor(value);
//     const rgb = _tinyColor.toRgb();
//
//     document.documentElement.style.setProperty('--adhere-black-color', value);
//     document.documentElement.style.setProperty(
//       '--adhere-black-color-rgb',
//       `${[rgb.r, rgb.g, rgb.b].join(',')}`,
//     );
//
//     /* 不可用颜色 */
//     _tinyColor.setAlpha(0.25);
//     document.documentElement.style.setProperty(
//       '--adhere-disabled-color',
//       _tinyColor.toPercentageRgbString(),
//     );
//
//     /* 边框 */
//     _tinyColor.setAlpha(0.1);
//     document.documentElement.style.setProperty(
//       '--adhere-border-color',
//       _tinyColor.toPercentageRgbString(),
//     );
//   },
//   /**
//    * 缺省的文字大小
//    * @param value
//    */
//   set adhereBaseFontSize(value) {
//     /* 缺省的文字大小 */
//     document.documentElement.style.setProperty('--adhere-base-font-size', value);
//     /* 大文字 */
//     document.documentElement.style.setProperty('--adhere-large-font-size', `calc(${value} + 2px)`);
//   },
//   /**
//    * 小文字
//    * @param value
//    */
//   set adhereSmallFontSize(value) {
//     /* 小文字 */
//     document.documentElement.style.setProperty('--adhere-small-font-size', value);
//   },
//   /**
//    * 最大层级
//    * @param value
//    */
//   set adhereCommonMaxZIndex(value) {
//     /* 最大层级 */
//     document.documentElement.style.setProperty('--adhere-common-max-zindex', value);
//   },
//   get adherePrimaryColor() {
//     return document.documentElement.style.getPropertyValue('--adhere-primary-color');
//   },
//   get adhereNormalColor() {
//     return document.documentElement.style.getPropertyValue('--adhere-normal-color');
//   },
//   get adhereBlackColor() {
//     return document.documentElement.style.getPropertyValue('--adhere-black-color');
//   },
//   get adhereBaseFontSize() {
//     return document.documentElement.style.getPropertyValue('--adhere-base-font-size');
//   },
//   get adhereSmallFontSize() {
//     return document.documentElement.style.getPropertyValue('--adhere-small-font-size');
//   },
//   get adhereCommonMaxZIndex() {
//     return document.documentElement.style.getPropertyValue('--adhere-common-max-zindex');
//   },
//   get adhereDisabledColor() {
//     return document.documentElement.style.getPropertyValue('--adhere-disabled-color');
//   },
//   get adhereBorderColor() {
//     return document.documentElement.style.getPropertyValue('--adhere-border-color');
//   },
//   get adhereLargeFontSize() {
//     return document.documentElement.style.getPropertyValue('--adhere-large-font-size');
//   },
// };

// export function setAdherePrimaryColor(color) {
//   cssVars.adherePrimaryColor = color;
// }
// export function setAdhereNormalColor(color) {
//   cssVars.adhereNormalColor = color;
// }
// export function setAdhereBlackColor(color) {
//   cssVars.adhereBlackColor = color;
// }
// export function setAdhereBaseFontSize(color) {
//   cssVars.adhereBaseFontSize = color;
// }
// export function setAdhereSmallFontSize(color) {
//   cssVars.adhereSmallFontSize = color;
// }
// export function setAdhereCommonMaxZIndex(color) {
//   cssVars.adhereCommonMaxZIndex = color;
// }
//
// export function getAdherePrimaryColor() {
//   return cssVars.adherePrimaryColor;
// }
// export function getAdhereNormalColor() {
//   return cssVars.adhereNormalColor;
// }
// export function getAdhereBlackColor() {
//   return cssVars.adhereBlackColor;
// }
// export function getAdhereBaseFontSize() {
//   return cssVars.adhereBaseFontSize;
// }
// export function getAdhereSmallFontSize() {
//   return cssVars.adhereSmallFontSize;
// }
// export function getAdhereCommonMaxZIndex() {
//   return cssVars.adhereCommonMaxZIndex;
// }
// export function getAdhereDisabledColor() {
//   return cssVars.adhereDisabledColor;
// }
// export function getAdhereBorderColor() {
//   return cssVars.adhereBorderColor;
// }
// export function getAdhereLargeFontSize() {
//   return cssVars.adhereLargeFontSize;
// }
//
// export const init: (theme?: {
//   primaryColor?: string;
//   normalColor?: string;
//   backColor?: string;
//   baseColor?: string;
//   baseFontSize?: string;
//   smallFontSize?: string;
//   commonMaxZIndex?: string;
// }) => void = (theme) => {
//   setAdherePrimaryColor(theme?.primaryColor ?? defaultTheme.primaryColor);
//   setAdhereNormalColor(theme?.normalColor ?? defaultTheme.normalColor);
//   setAdhereBlackColor(theme?.backColor ?? defaultTheme.blackColor);
//   setAdhereBaseFontSize(theme?.baseFontSize ?? defaultTheme.baseFontSize);
//   setAdhereSmallFontSize(theme?.smallFontSize ?? defaultTheme.smallFontSize);
//   setAdhereCommonMaxZIndex(theme?.commonMaxZIndex ?? defaultTheme.commonMaxZIndex);
// };

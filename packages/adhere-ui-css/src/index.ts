import tinyColor from 'tinycolor2';

/* 全局的css Vars*/
const cssVars = {
  /**
   * 主颜色
   * @param value
   */
  set adherePrimaryColor(value) {
    const _tinyColor = tinyColor(value);
    const rgb = _tinyColor.toRgb();

    document.documentElement.style.setProperty('--adhere-primary-color', value);
    document.documentElement.style.setProperty(
      '--adhere-primary-color-rgb',
      `${[rgb.r, rgb.g, rgb.b].join(',')}`,
    );
  },
  /**
   * 缺省的颜色
   * @param value
   */
  set adhereNormalColor(value) {
    const _tinyColor = tinyColor(value);
    const rgb = _tinyColor.toRgb();

    document.documentElement.style.setProperty('--adhere-normal-color', value);
    document.documentElement.style.setProperty(
      '--adhere-normal-color-rgb',
      `${[rgb.r, rgb.g, rgb.b].join(',')}`,
    );
  },
  /**
   * 黑色
   * @param value
   */
  set adhereBlackColor(value) {
    const _tinyColor = tinyColor(value);
    const rgb = _tinyColor.toRgb();

    document.documentElement.style.setProperty('--adhere-black-color', value);
    document.documentElement.style.setProperty(
      '--adhere-black-color-rgb',
      `${[rgb.r, rgb.g, rgb.b].join(',')}`,
    );

    /* 不可用颜色 */
    _tinyColor.setAlpha(0.25);
    document.documentElement.style.setProperty(
      '--adhere-disabled-color',
      _tinyColor.toPercentageRgbString(),
    );

    /* 边框 */
    _tinyColor.setAlpha(0.1);
    document.documentElement.style.setProperty(
      '--adhere-border-color',
      _tinyColor.toPercentageRgbString(),
    );
  },
  /**
   * 缺省的文字大小
   * @param value
   */
  set adhereBaseFontSize(value) {
    /* 缺省的文字大小 */
    document.documentElement.style.setProperty('--adhere-base-font-size', value);
    /* 大文字 */
    document.documentElement.style.setProperty('--adhere-large-font-size', `calc(${value} + 2px)`);
  },
  /**
   * 小文字
   * @param value
   */
  set adhereSmallFontSize(value) {
    /* 小文字 */
    document.documentElement.style.setProperty('--adhere-small-font-size', value);
  },
  /**
   * 最大层级
   * @param value
   */
  set adhereCommonMaxZIndex(value) {
    /* 最大层级 */
    document.documentElement.style.setProperty('--adhere-common-max-zindex', value);
  },
  get adherePrimaryColor() {
    return document.documentElement.style.getPropertyValue('--adhere-primary-color');
  },
  get adhereNormalColor() {
    return document.documentElement.style.getPropertyValue('--adhere-normal-color');
  },
  get adhereBlackColor() {
    return document.documentElement.style.getPropertyValue('--adhere-black-color');
  },
  get adhereBaseFontSize() {
    return document.documentElement.style.getPropertyValue('--adhere-base-font-size');
  },
  get adhereSmallFontSize() {
    return document.documentElement.style.getPropertyValue('--adhere-small-font-size');
  },
  get adhereCommonMaxZIndex() {
    return document.documentElement.style.getPropertyValue('--adhere-common-max-zindex');
  },
  get adhereDisabledColor() {
    return document.documentElement.style.getPropertyValue('--adhere-disabled-color');
  },
  get adhereBorderColor() {
    return document.documentElement.style.getPropertyValue('--adhere-border-color');
  },
  get adhereLargeFontSize() {
    return document.documentElement.style.getPropertyValue('--adhere-large-font-size');
  },
};

const defaultTheme = {
  primaryColor: '#2480ff',
  normalColor: '#d9d9d9',
  blackColor: '#000',
  baseFontSize: '14px',
  smallFontSize: '12px',
  commonMaxZIndex: '1999',
};

export function setAdherePrimaryColor(color) {
  cssVars.adherePrimaryColor = color;
}
export function setAdhereNormalColor(color) {
  cssVars.adhereNormalColor = color;
}
export function setAdhereBlackColor(color) {
  cssVars.adhereBlackColor = color;
}
export function setAdhereBaseFontSize(color) {
  cssVars.adhereBaseFontSize = color;
}
export function setAdhereSmallFontSize(color) {
  cssVars.adhereSmallFontSize = color;
}
export function setAdhereCommonMaxZIndex(color) {
  cssVars.adhereCommonMaxZIndex = color;
}

export function getAdherePrimaryColor() {
  return cssVars.adherePrimaryColor;
}
export function getAdhereNormalColor() {
  return cssVars.adhereNormalColor;
}
export function getAdhereBlackColor() {
  return cssVars.adhereBlackColor;
}
export function getAdhereBaseFontSize() {
  return cssVars.adhereBaseFontSize;
}
export function getAdhereSmallFontSize() {
  return cssVars.adhereSmallFontSize;
}
export function getAdhereCommonMaxZIndex() {
  return cssVars.adhereCommonMaxZIndex;
}
export function getAdhereDisabledColor() {
  return cssVars.adhereDisabledColor;
}
export function getAdhereBorderColor() {
  return cssVars.adhereBorderColor;
}
export function getAdhereLargeFontSize() {
  return cssVars.adhereLargeFontSize;
}

export const init: (theme?: {
  primaryColor?: string;
  normalColor?: string;
  backColor?: string;
  baseColor?: string;
  baseFontSize?: string;
  smallFontSize?: string;
  commonMaxZIndex?: string;
}) => void = (theme) => {
  setAdherePrimaryColor(theme?.primaryColor ?? defaultTheme.primaryColor);
  setAdhereNormalColor(theme?.normalColor ?? defaultTheme.normalColor);
  setAdhereBlackColor(theme?.backColor ?? defaultTheme.blackColor);
  setAdhereBaseFontSize(theme?.baseFontSize ?? defaultTheme.baseFontSize);
  setAdhereSmallFontSize(theme?.smallFontSize ?? defaultTheme.smallFontSize);
  setAdhereCommonMaxZIndex(theme?.commonMaxZIndex ?? defaultTheme.commonMaxZIndex);
};

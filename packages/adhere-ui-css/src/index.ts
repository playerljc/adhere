import tinyColor from 'tinycolor2';

import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

/**
 * CSS变量映射项接口
 */
interface CSSVarMapItem {
  /** 变量值 */
  value: string | number;
  /** 映射的token */
  mapToken?: Map<string, CSSVarMapTokenItem>;
}

/**
 * CSS变量映射token项接口
 */
interface CSSVarMapTokenItem {
  /** 透明度值 */
  alpha?: string;
  /** 计算表达式 */
  calc?: string;
}

/**
 * CSS变量对象接口
 */
interface CSSVars {
  [key: string]: any;
}

/**
 * 导出对象接口
 */
interface ExportObj {
  [key: string]: any;
}

/**
 * 主题配置接口
 */
interface ThemeConfig {
  [prop: string]: string | number;
}

/**
 * 默认主题映射
 */
const defaultThemeMap = new Map<string, CSSVarMapItem>([
  // 品牌颜色
  [
    'adhere-color-primary',
    {
      value: '#2480ff',
    },
  ],
  // 主boxShadow颜色
  [
    'adhere-box-shadow-primary',
    {
      value: 'rgba(0, 0, 0, 0.15) 0 0 10px',
    },
  ],
  // 主文字颜色
  [
    'adhere-color-text-base',
    {
      value: '#000',
      mapToken: new Map<string, CSSVarMapTokenItem>([
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
      mapToken: new Map<string, CSSVarMapTokenItem>([
        [
          'adhere-font-size-lg',
          {
            calc: '+ 2px',
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
  // DPR
  [
    'adhere-device-pixel-ratio',
    {
      value: window.devicePixelRatio,
    },
  ],
]);

/**
 * 初始化函数接口
 */
export interface Init {
  /**
   * 初始化CSS变量系统
   * @param theme - 主题配置对象
   * @param wrapperEL - 包装元素，默认为document.documentElement
   * @param media - 媒体配置
   */
  (
    theme: ThemeConfig,
    wrapperEL?: HTMLElement,
    media?: ConfigProviderProps['media'],
  ): void;
}

/**
 * 根据媒体配置获取处理后的值
 * @param originValue - 原始值
 * @param media - 媒体配置
 * @returns 处理后的值
 */
function getValue(
  originValue: string | number,
  media?: ConfigProviderProps['media'],
): string | number {
  if (media?.isUseMedia) {
    if (typeof originValue === 'string' && originValue.endsWith('px')) {
      return originValue
        .split(/\s+/gim)
        .map((value) => {
          if (value.endsWith('px')) {
            const number = parseFloat(value.replace('px', ''));
            return Util.pxToRem(number, media.designWidth ?? 192, media);
          }
          return value;
        })
        .join(' ');
    }
  }

  return originValue;
}

/**
 * 设置CSS变量到指定元素
 * @param element - 目标元素
 * @param htmlEl - HTML根元素
 * @param varName - 变量名
 * @param value - 变量值
 */
function setCSSVariable(
  element: HTMLElement,
  htmlEl: HTMLElement,
  varName: string,
  value: string | number,
): void {
  element.style.setProperty(`--${varName}`, `${value}`);
  if (!htmlEl.style.getPropertyValue(`--${varName}`)) {
    htmlEl.style.setProperty(`--${varName}`, `${value}`);
  }
}

/**
 * 处理颜色相关的CSS变量
 * @param element - 目标元素
 * @param htmlEl - HTML根元素
 * @param varName - 变量名
 * @param targetValue - 目标值
 */
function handleColorVariable(
  element: HTMLElement,
  htmlEl: HTMLElement,
  varName: string,
  targetValue: string | number,
): void {
  const color = tinyColor(targetValue);
  if (color.isValid()) {
    const rgb = color.toRgb();
    const rgbValue = `${[rgb.r, rgb.g, rgb.b].join(',')}`;
    
    setCSSVariable(element, htmlEl, `${varName}-rgb`, rgbValue);
  }
}

/**
 * 处理映射token
 * @param element - 目标元素
 * @param htmlEl - HTML根元素
 * @param entryValue - 映射项值
 * @param targetValue - 目标值
 * @param media - 媒体配置
 */
function handleMapToken(
  element: HTMLElement,
  htmlEl: HTMLElement,
  entryValue: CSSVarMapItem,
  targetValue: string | number,
  media?: ConfigProviderProps['media'],
): void {
  if (!entryValue?.mapToken) return;

  const color = tinyColor(targetValue);
  
  Array.from(entryValue.mapToken.keys()).forEach((mapTokenVarName) => {
    const mapTokenEntryValue = entryValue.mapToken!.get(mapTokenVarName);
    if (!mapTokenEntryValue) return;

    // 处理alpha透明度
    if (mapTokenEntryValue.alpha) {
      color.setAlpha(Number.parseFloat(mapTokenEntryValue.alpha));
      setCSSVariable(element, htmlEl, mapTokenVarName, color.toPercentageRgbString());
    }

    // 处理calc计算
    if (mapTokenEntryValue.calc) {
      const targetCalc = getValue(mapTokenEntryValue.calc, media);
      const calcValue = `calc(${targetValue} ${targetCalc})`;
      setCSSVariable(element, htmlEl, mapTokenVarName, calcValue);
    }
  });
}

/**
 * 初始化CSS变量系统
 * @param theme - 主题配置对象
 * @param wrapperEL - 包装元素，默认为document.documentElement
 * @param media - 媒体配置
 */
const init: Init = (
  theme,
  wrapperEL = document.documentElement,
  media?: ConfigProviderProps['media'],
) => {
  const htmlEl = document.documentElement;
  const cssVars: CSSVars = {};
  const exportObj: ExportObj = {};
  const curTheme = theme ?? {};
  const keys = Array.from(defaultThemeMap.keys());

  keys.forEach((varName) => {
    // 小写的驼峰命名
    const varCamelCaseName = Util.toCamelCase(varName, '-');
    // 大写的驼峰命名
    const varUpperCamelCaseName = Util.toCamelCase(varName, '-', true);
    const entryValue = defaultThemeMap.get(varName);

    if (!entryValue) return;

    // 定义CSS变量设置器
    Object.defineProperty(cssVars, varCamelCaseName, {
      set(value: string | number) {
        const targetValue = getValue(value, media);

        // 设置CSS变量
        setCSSVariable(wrapperEL, htmlEl, varName, targetValue);

        // 处理颜色相关的RGB变量
        handleColorVariable(wrapperEL, htmlEl, varName, targetValue);

        // 处理映射token
        handleMapToken(wrapperEL, htmlEl, entryValue, targetValue, media);
      },
    });

    // 定义设置器方法
    exportObj[`set${varUpperCamelCaseName}`] = (value: string | number) => {
      cssVars[varCamelCaseName] = value;
    };

    // 定义获取器方法
    exportObj[`get${varUpperCamelCaseName}`] = (): string => {
      return wrapperEL.style.getPropertyValue(`--${varName}`);
    };

    // 初始化变量值
    const themeKey = Util.lowercaseInitial(
      varUpperCamelCaseName.substring(
        varUpperCamelCaseName.indexOf('Adhere') + 'Adhere'.length,
      ),
    );
    
    const initialValue = curTheme[themeKey] ?? entryValue.value;
    exportObj[`set${varUpperCamelCaseName}`](initialValue);
  });
};

export default init;

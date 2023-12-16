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

export interface Init {
  (theme: { [prop: string]: string }, wrapperEL?: HTMLElement): void;
}

/**
 * init
 * @param theme
 * @param wrapperEL
 */
const init: Init = (theme, wrapperEL = document.documentElement) => {
  // 当前变量
  const cssVars = {};

  const exportObj = {};

  const curTheme = theme ?? {};

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
        wrapperEL.style.setProperty(`--${varName}`, value);
        if (!document.documentElement.style.getPropertyValue(`--${varName}`)) {
          document.documentElement.style.setProperty(`--${varName}`, value);
        }

        // 是颜色需要在定义一个-rgb的变量
        const color = tinyColor(value);
        if (color.isValid()) {
          const rgb = color.toRgb();

          wrapperEL.style.setProperty(`--${varName}-rgb`, `${[rgb.r, rgb.g, rgb.b].join(',')}`);
          if (!document.documentElement.style.getPropertyValue(`--${varName}-rgb`)) {
            document.documentElement.style.setProperty(
              `--${varName}-rgb`,
              `${[rgb.r, rgb.g, rgb.b].join(',')}`,
            );
          }
        }

        // 处理mapToken
        if (!entryValue?.mapToken) return;
        Array.from(entryValue?.mapToken?.keys?.())?.forEach?.((mapTokenVarName) => {
          const mapTokenVEntryValue = entryValue?.mapToken?.get?.(mapTokenVarName);
          if (mapTokenVEntryValue?.alpha) {
            color.setAlpha(Number.parseFloat(mapTokenVEntryValue?.alpha));

            wrapperEL.style.setProperty(`--${mapTokenVarName}`, color.toPercentageRgbString());
            if (!document.documentElement.style.getPropertyValue(`--${mapTokenVarName}`)) {
              document.documentElement.style.setProperty(
                `--${mapTokenVarName}`,
                color.toPercentageRgbString(),
              );
            }
          }

          if (mapTokenVEntryValue.calc) {
            wrapperEL.style.setProperty(
              `--${mapTokenVarName}`,
              `calc(${value} ${mapTokenVEntryValue.calc})`,
            );
            if (!document.documentElement.style.getPropertyValue(`--${mapTokenVarName}`)) {
              document.documentElement.style.setProperty(
                `--${mapTokenVarName}`,
                `calc(${value} ${mapTokenVEntryValue.calc})`,
              );
            }
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
      wrapperEL.style.getPropertyValue(`--${varName}`);

    // -----------------------------------------------------------------------------------------
    // ColorPrimary
    exportObj?.[`set${varUpperCamelCaseName}`]?.(
      curTheme[
        Util.lowercaseInitial(
          varUpperCamelCaseName.substring(
            varUpperCamelCaseName.indexOf('Adhere') + 'Adhere'.length,
          ),
        )
      ] ?? defaultThemeMap.get(varName)?.value,
    );
  });

  // keys.forEach((varName) => {
  //   // varName === adhere-color-primary
  //
  //   // AdhereColorPrimary
  //   const varCamelCaseName = Util.toCamelCase(varName, '-', true);
  //
  //   // ColorPrimary
  //   const inputName = Util.lowercaseInitial(
  //     varCamelCaseName.substring(varCamelCaseName.indexOf('Adhere') + 'Adhere'.length),
  //   );
  //
  //   exportObj?.[`set${varCamelCaseName}`]?.(
  //     curTheme[inputName] ?? defaultThemeMap.get(varName)?.value,
  //   );
  // });
};

/**
 * theme
 * {
 *   colorPrimary
 * }
 * @param theme
 */
export default init;

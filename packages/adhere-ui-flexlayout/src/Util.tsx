import type { CSSProperties, ReactNode } from 'react';

import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import { gridCount } from './Fixed';
import type { GetGridStyleParams, FlexDirection } from './types';

/**
 * 获取水平栅格样式
 * @param {Object} params - 参数对象
 * @param {number} params.gapOrigin - 间隙值
 * @param {ConfigProviderProps['media']} params.media - 媒体配置
 * @returns {CSSProperties} 水平栅格样式
 */
const getHorizontalGridStyle = ({
  gapOrigin,
  media,
}: {
  gapOrigin: number;
  media: ConfigProviderProps['media'];
}): CSSProperties => {
  const gapValue = getValueWithUnit(gapOrigin / 2, media);

  return {
    paddingLeft: gapValue,
    paddingRight: gapValue,
  };
};

/**
 * 获取垂直栅格样式
 * @param {Object} params - 参数对象
 * @param {number | null} params.span - 栅格跨度
 * @param {ReactNode[]} params.children - 子元素数组
 * @param {number} params.gapOrigin - 间隙值
 * @param {ConfigProviderProps['media']} params.media - 媒体配置
 * @returns {CSSProperties} 垂直栅格样式
 */
const getVerticalGridStyle = ({
  span,
  children,
  gapOrigin,
  media,
}: {
  span?: number | null;
  children: ReactNode[];
  gapOrigin: number;
  media: ConfigProviderProps['media'];
}): CSSProperties => {
  const gridStyle: CSSProperties = {};
  const gapValue = getValueWithUnit(gapOrigin / 2, media);

  // 栅格设置
  if (span !== null && span !== undefined) {
    const heightGap = (children.length - 1) * gapOrigin;
    // (100% - 所有栅格间隙的高度) * (span / 24)
    gridStyle.height = `calc( (100% - ${getValueWithUnit(
      heightGap,
      media,
    )}) * (${span}/${gridCount}) )`;
  }

  // 设置paddingTop和paddingBottom
  gridStyle.paddingTop = gapValue;
  gridStyle.paddingBottom = gapValue;

  return gridStyle;
};

/**
 * 获取栅格系统的样式
 * @description 根据布局方向、栅格间隙、跨度等参数计算样式
 * @param {GetGridStyleParams} params - 栅格样式参数
 * @returns {CSSProperties} 栅格样式
 */
export const getGridStyle = ({
  gutter,
  span,
  children = [],
  direction = 'vertical',
  media,
}: GetGridStyleParams): CSSProperties => {
  let gapOrigin = 0;

  if (Array.isArray(gutter)) {
    if (gutter.length === 1) {
      gapOrigin = gutter[0];
    } else if (gutter.length === 2) {
      if (direction === 'horizontal') {
        gapOrigin = gutter[1];
      } else {
        gapOrigin = gutter[0];
      }
    }
  } else if (typeof gutter === 'number') {
    gapOrigin = gutter;
  }

  const styleMap = new Map<FlexDirection, () => CSSProperties>([
    [
      'horizontal',
      () => getHorizontalGridStyle({ gapOrigin, media }),
    ],
    [
      'vertical',
      () => getVerticalGridStyle({ span, children, gapOrigin, media }),
    ],
  ]);

  return styleMap.get(direction)?.() ?? {};
};

/**
 * 获取带单位的数值
 * @param {number | string} pixel - 像素值或字符串
 * @param {ConfigProviderProps['media']} media - 媒体配置
 * @returns {string} 带单位的数值字符串
 */
export function getValueWithUnit(
  pixel: number | string, 
  media: ConfigProviderProps['media']
): string {
  if (Util.isString(pixel)) {
    return pixel as string;
  }

  const value = getValue(pixel as number, media);

  if (media?.isUseMedia) {
    return `${value}rem`;
  }

  return `${value}px`;
}

/**
 * 获取数值
 * @param {number} pixel - 像素值
 * @param {ConfigProviderProps['media']} media - 媒体配置，默认为不使用媒体查询
 * @returns {number} 转换后的数值
 */
export function getValue(
  pixel: number,
  media: ConfigProviderProps['media'] = { isUseMedia: false, designWidth: 192 }
): number {
  if (media?.isUseMedia) {
    return Util.pxToRemNumber(pixel, media.designWidth as number);
  }

  return pixel;
}

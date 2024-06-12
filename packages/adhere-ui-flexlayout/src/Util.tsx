import type { CSSProperties, ReactNode } from 'react';

import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import { gridCount } from './Fixed';
import type { getGridStyleParams } from './types';

/**
 * getHorizontalGridStyle
 * @param {number} gapOrigin
 * @param media
 * @return {React.CSSProperties}
 */
const getHorizontalGridStyle = ({
  gapOrigin,
  media,
}: {
  gapOrigin: number;
  media: ConfigProviderProps['media'];
}): CSSProperties => {
  const gridLayout: any = {};

  const gapValue = getValueWithUnit(gapOrigin, media); /*`${gapOrigin / 2}px`;*/

  gridLayout.paddingLeft = gapValue;
  gridLayout.paddingRight = gapValue;

  return gridLayout;
};

/**
 * getVerticalGridStyle
 * @param {number} span
 * @param {ReactNode[]} children
 * @param {number} gapOrigin
 * @param media
 * @return {React.CSSProperties}
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
  const gridStyle: any = {};

  const gapValue = getValueWithUnit(gapOrigin / 2, media); /*`${gapOrigin / 2}px`*/

  // 栅格设置
  if (span) {
    const gapHeight = (children.length - 1) * gapOrigin;
    // (100% - 所有栅格间隙的高度) * (span / 24)
    // gridStyle.height = `calc( (100% - ${gapHeight}px) * (${span}/${gridCount}) )`;
    gridStyle.height = `calc( (100% - ${getValueWithUnit(
      gapHeight,
      media,
    )}) * (${span}/${gridCount}) )`;
  }

  // 设置paddingTop和paddingBottom
  gridStyle.paddingTop = gapValue;
  gridStyle.paddingBottom = gapValue;

  return gridStyle;
};

/**
 * getGridStyle
 * @description 获取栅格系统的样式
 * @param {number | number[]} gutter gird的间隙
 * @param {'vertical' | 'horizontal'} direction 方向
 * @param {number} span 栅格的值
 * @param {React.ReactNode[]} children 孩子
 * @param media
 * @return {React.CSSProperties}
 */
export const getGridStyle = ({
  gutter,
  span,
  children = [],
  direction = 'vertical',
  media,
}: getGridStyleParams): CSSProperties => {
  let gapOrigin: number = 0;

  if (Array.isArray(gutter)) {
    if (gutter.length === 1) {
      gapOrigin = gutter[0];
    } else if (gutter.length === 2) {
      gapOrigin = gutter[1];
    }
  } else {
    gapOrigin = gutter as number;
  }

  const map = new Map([
    [
      // 横向
      'horizontal',
      () => getHorizontalGridStyle({ gapOrigin, media }),
    ],
    [
      // 纵向
      'vertical',
      () => getVerticalGridStyle({ span, children, gapOrigin, media }),
    ],
  ]);

  return map.get(direction)?.() ?? {};
};

export function getValueWithUnit(pixel: number | string, media: ConfigProviderProps['media']) {
  if (Util.isString(pixel)) return pixel;

  const value = getValue(pixel as number, media);

  if (media?.isUseMedia) {
    return `${value}rem`;
  }

  return `${value}px`;
}

export function getValue(
  pixel: number,
  media: ConfigProviderProps['media'] = { isUseMedia: false, designWidth: 192 },
) {
  if (media.isUseMedia) {
    return Util.pxToRemNumber(pixel, media.designWidth as number);
  }

  return pixel;
}

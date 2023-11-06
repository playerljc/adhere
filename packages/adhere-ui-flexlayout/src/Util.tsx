import { gridCount } from './Fixed';
import type { getGridStyleParams } from './types';

/**
 * getHorizontalGridStyle
 * @param {number} gapOrigin
 * @return {React.CSSProperties}
 */
const getHorizontalGridStyle = ({ gapOrigin }) => {
  const gridLayout: any = {};

  const gapPixel = `${gapOrigin / 2}px`;

  gridLayout.paddingLeft = gapPixel;
  gridLayout.paddingRight = gapPixel;

  return gridLayout;
};

/**
 * getVerticalGridStyle
 * @param {number} span
 * @param {ReactNode[]} children
 * @param {number} gapOrigin
 * @return {React.CSSProperties}
 */
const getVerticalGridStyle = ({ span, children, gapOrigin }) => {
  const gridStyle: any = {};

  const gapPixel = `${gapOrigin / 2}px`;

  // 栅格设置
  if (span) {
    const gapHeight = (children.length - 1) * gapOrigin;
    // (100% - 所有栅格间隙的高度) * (span / 24)
    gridStyle.height = `calc( (100% - ${gapHeight}px) * (${span}/${gridCount}) )`;
  }

  // 设置paddingTop和paddingBottom
  gridStyle.paddingTop = gapPixel;
  gridStyle.paddingBottom = gapPixel;

  return gridStyle;
};

/**
 * getGridStyle
 * @description 获取栅格系统的样式
 * @param {number | number[]} gutter gird的间隙
 * @param {'vertical' | 'horizontal'} direction 方向
 * @param {number} span 栅格的值
 * @param {React.ReactNode[]} children 孩子
 * @return {React.CSSProperties}
 */
export const getGridStyle = ({
  gutter,
  span,
  children = [],
  direction = 'vertical',
}: getGridStyleParams) => {
  let gapOrigin;

  if (Array.isArray(gutter)) {
    if (gutter.length === 1) {
      gapOrigin = gutter[0];
    } else if (gutter.length === 2) {
      gapOrigin = gutter[1];
    }
  } else {
    gapOrigin = gutter;
  }

  const map = new Map([
    [
      // 横向
      'horizontal',
      () => getHorizontalGridStyle({ gapOrigin }),
    ],
    [
      // 纵向
      'vertical',
      () => getVerticalGridStyle({ span, children, gapOrigin }),
    ],
  ]);

  return map.get(direction)?.() ?? {};
};

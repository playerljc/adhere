import { useMemo } from 'react';

import { gridCount } from './fixed';
import { useGridStyleHookProps } from './types';

/**
 * useGridStyleHook
 * @description 栅格系统的样式
 * @param {React.CSSProperties} style 样式
 * @param {number | number[]} gutter gird的间隙
 * @param {'vertical' | 'horizontal'} direction 方向
 * @param {number} span 栅格的值
 * @param {React.ReactNode[]} children 孩子
 */
export const useGridStyleHook = ({
  style = {},
  gutter = 0,
  span,
  children = [],
  direction = 'vertical',
}: useGridStyleHookProps) => {
  return useMemo(() => {
    const defaultStyle = style || {};

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

    const gapPixel = `${gapOrigin / 2}px`;

    const map = new Map([
      [
        // 横向
        'horizontal',
        () => ({
          paddingLeft: gapPixel,
          paddingRight: gapPixel,
        }),
      ],
      [
        // 纵向
        'vertical',
        () => {
          const verticalStyle: any = {};

          // 栅格设置
          if (span) {
            const gapHeight = (children.length - 1) * gapOrigin;
            // (100% - 所有栅格间隙的高度) * (span / 24)
            verticalStyle.height = `calc( (100% - ${gapHeight}px) * (${span}/${gridCount}) )`;
          }

          // 设置paddingTop和paddingBottom
          verticalStyle.paddingTop = gapPixel;
          verticalStyle.paddingBottom = gapPixel;

          return verticalStyle;
        },
      ],
    ]);

    return {
      ...(map.get(direction)?.() || {}),
      ...defaultStyle,
    };
  }, [style, gutter]);
};

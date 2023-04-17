import React, { useMemo } from 'react';

import { gridCount } from './fixed';
import { FixedProps } from './types';

/**
 * useGrid
 * @description 是否使用了栅格系统
 * @param {FixedProps} props
 * @return {boolean}
 */
export const useGrid = (props: FixedProps) =>
  useMemo(
    () =>
      'span' in props &&
      typeof props.span === 'number' &&
      props.span >= 0 &&
      props.span <= gridCount,
    [props.span],
  );

/**
 * useGap
 * @param {number | number[]} gutter
 * @return {boolean}
 */
export const useGap = (gutter) =>
  useMemo(() => {
    if (
      gutter === undefined ||
      gutter === null ||
      gutter === '' ||
      gutter === 0 ||
      typeof gutter === 'function' ||
      (typeof gutter === 'object' && !Array.isArray(gutter))
    )
      return false;

    if (Array.isArray(gutter)) {
      if (gutter.length === 0) return false;

      if (gutter.length >= 1 && gutter.length <= 2) {
        return !gutter.some(
          (g) => g === undefined || g === null || g === '' || g === 0 || typeof g !== 'number',
        );
      }
    }

    return true;
  }, [gutter]);

import type { AliasToken } from 'antd/es/theme/interface';
import startCase from 'lodash/startCase';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import type { BreakPoint, BreakPoints, BreakPointsCondition } from './types';

/**
 * isInBetween
 * @param breakpoint
 * @param width
 * @returns {boolean}
 */
export function isInBetween({
  breakpoint,
  width,
}: {
  breakpoint: BreakPoint;
  width: number;
}): boolean {
  let minWidth = Number.MIN_VALUE;
  let maxWidth = Number.MAX_VALUE;

  if ('minWidth' in breakpoint) {
    minWidth = breakpoint.minWidth as number;
  }

  if ('maxWidth' in breakpoint) {
    maxWidth = breakpoint.maxWidth as number;
  }

  return width >= minWidth && width <= maxWidth;
}

/**
 * getMediaQueryByBreakPoints
 * @param breakPoints
 */
export function getMediaQueryByBreakPoints<T extends Record<string, BreakPoint>>(
  breakPoints: BreakPoints<T>,
): BreakPointsCondition<T> {
  const width = window.innerWidth;

  return Object.keys(breakPoints).reduce<BreakPointsCondition<T>>((breakPointsCondition, key) => {
    const formattedKey = `is${startCase(key).replace(/\s/g, '')}` as keyof BreakPointsCondition<T>;
    (breakPointsCondition as any)[formattedKey] = isInBetween({
      breakpoint: breakPoints[key],
      width,
    });
    return breakPointsCondition;
  }, {} as BreakPointsCondition<T>);
}

export const antdNumberTokenToRem = WatchMemoized.memoized.createMemoFun(
  (token: AliasToken, rootValue: number, fontSize: number) => {
    return Object.keys(token).reduce((acc, key) => {
      const value = token[key];

      if (typeof value === 'number') {
        acc[key] = (value / rootValue) * fontSize;
      } /*else {
        acc[key] = value;
      }*/

      return acc;
    }, {});
  },
);

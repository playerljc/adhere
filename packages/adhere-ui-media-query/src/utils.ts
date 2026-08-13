import type { AliasToken } from 'antd/es/theme/interface';
import startCase from 'lodash/startCase';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import type { BreakPoint, BreakPoints, BreakPointsCondition } from './types';

/**
 * 将断点名转为条件字段名（与 getMediaQueryByBreakPoints / MediaQuery 查找保持一致）
 * 例如 mobile → isMobile
 */
export function formatConditionKey(breakPointName: string): string {
  return `is${startCase(String(breakPointName)).replace(/\s/g, '')}`;
}

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
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

  return Object.keys(breakPoints).reduce<BreakPointsCondition<T>>((breakPointsCondition, key) => {
    const formattedKey = formatConditionKey(key) as keyof BreakPointsCondition<T>;
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

import type { BreakPoint, BreakPoints, BreakPointsCondition } from './types';
/**
 * isInBetween
 * @param breakpoint
 * @param width
 * @returns {boolean}
 */
export declare function isInBetween({ breakpoint, width, }: {
    breakpoint: BreakPoint;
    width: number;
}): boolean;
/**
 * getMediaQueryByBreakPoints
 * @param breakPoints
 */
export declare function getMediaQueryByBreakPoints<T extends Record<string, BreakPoint>>(breakPoints: BreakPoints<T>): BreakPointsCondition<T>;
export declare const antdNumberTokenToRem: (...args: any[]) => any;

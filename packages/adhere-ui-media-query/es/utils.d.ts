import type { BreakPoint, BreakPoints, BreakPointsCondition } from './types';
/**
 * 将断点名转为条件字段名（与 getMediaQueryByBreakPoints / MediaQuery 查找保持一致）
 * 例如 mobile → isMobile
 */
export declare function formatConditionKey(breakPointName: string): string;
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

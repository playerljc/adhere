import type { BreakPoint, BreakPoints, BreakPointsCondition } from './types';
/**
 * useMediaQuery
 * @param breakPoints
 */
export declare function useMediaQuery<T extends Record<string, BreakPoint>>(breakPoints: BreakPoints<T>): BreakPointsCondition<T>;

import React, { type NamedExoticComponent } from 'react';
import { useMediaQuery } from './useMediaQuery';
export interface MediaQueryProps<T extends Record<string, BreakPoint>> {
    children?: React.ReactNode;
    noMatch?: () => React.ReactNode;
    breakPoint: BreakPointsType<T>;
    breakPoints: BreakPoints<T>;
}
export interface BreakPoint {
    minWidth?: number;
    maxWidth?: number;
    rootValue: {
        '1x': number;
        '2x': number;
    } | number;
    designWidth: number;
}
export type BreakPoints<T extends Record<string, BreakPoint>> = {
    [P in keyof T]: T[P];
};
/**
 * {
 *   isMobile: boolean;
 *   isMobileSM: boolean;
 *   isTablet: boolean;
 *   isTabletLG: boolean;
 *   isLaptop: boolean;
 *   isDesktop: boolean;
 * }
 */
export type BreakPointsCondition<T extends Record<string, BreakPoint>> = {
    [P in keyof T as `is${Capitalize<string & P>}`]: boolean;
};
export type BreakPointsType<T extends Record<string, BreakPoint>> = keyof BreakPoints<T>;
export type MediaQueryComponent<T extends Record<string, BreakPoint>> = NamedExoticComponent<MediaQueryProps<T>> & {
    useMediaQuery: typeof useMediaQuery;
};

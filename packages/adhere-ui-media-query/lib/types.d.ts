import React, { type NamedExoticComponent } from 'react';
import { useMediaQuery } from './useMediaQuery';
export interface MediaQueryProps {
    children?: React.ReactNode;
    noMatch?: () => React.ReactNode;
    breakPoint: BreakPointsType;
    breakPoints: BreakPoints;
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
export interface BreakPoints {
    mobile: BreakPoint;
    mobileSM: BreakPoint;
    tablet: BreakPoint;
    tabletLG: BreakPoint;
    laptop: BreakPoint;
    desktop: BreakPoint;
}
export interface BreakPointsCondition {
    isMobile: boolean;
    isMobileSM: boolean;
    isTablet: boolean;
    isTabletLG: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
}
export type BreakPointsType = keyof BreakPoints;
export type MediaQueryComponent = NamedExoticComponent<MediaQueryProps> & {
    useMediaQuery: typeof useMediaQuery;
};

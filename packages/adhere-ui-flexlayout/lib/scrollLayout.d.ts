import React from 'react';
import { ScrollLayoutContextType, ScrollLayoutProps } from './types';
/**
 * ScrollLayoutContext
 */
export declare const ScrollLayoutContext: React.Context<ScrollLayoutContextType>;
/**
 * useScrollLayout
 */
export declare const useScrollLayout: () => {
    getEl: () => HTMLElement | null | undefined;
};
/**
 * ScrollLayout
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
declare const ScrollLayout: React.NamedExoticComponent<ScrollLayoutProps>;
export default ScrollLayout;

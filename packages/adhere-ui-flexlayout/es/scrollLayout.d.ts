import React, { FC } from 'react';
import { ScrollLayoutContextType, ScrollLayoutProps } from './types';
/**
 * ScrollLayoutContext
 */
export declare const ScrollLayoutContext: React.Context<ScrollLayoutContextType>;
/**
 * useScrollLayout
 */
export declare const useScrollLayout: () => {
    getEl: () => HTMLElement | null;
};
/**
 * ScrollLayout
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
declare const ScrollLayout: FC<ScrollLayoutProps>;
export default ScrollLayout;

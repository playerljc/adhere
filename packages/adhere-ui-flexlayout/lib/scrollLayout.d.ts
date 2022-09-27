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
    getEl: () => HTMLElement | null;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ScrollLayoutProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;

import React from 'react';
import { IScrollLayoutProps } from './types';
/**
 * ScrollLayoutContext
 * @type {React.Context<{store: {}}>}
 */
export declare const ScrollLayoutContext: React.Context<{
    getEl: () => HTMLElement;
}>;
/**
 * useScrollLayout
 */
export declare function useScrollLayout(): {
    getEl: () => HTMLElement;
};
declare const Wrap: React.ForwardRefExoticComponent<IScrollLayoutProps & React.RefAttributes<unknown>>;
export default Wrap;

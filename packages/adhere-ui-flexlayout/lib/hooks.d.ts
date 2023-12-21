import React, { MutableRefObject } from 'react';
import type { FixedProps } from './types';
/**
 * useGrid
 * @description 是否使用了栅格系统
 * @param {FixedProps} props
 * @return {boolean}
 */
export declare const useGrid: (props: FixedProps) => boolean;
/**
 * useGap
 * @param {number | number[]} gutter
 * @return {boolean}
 */
export declare const useGap: (gutter: any) => boolean;
/**
 * useTrigger
 */
export declare const useTrigger: ({ trigger, collapseDirection, collapsedSize, defaultCollapsible, onCollapse, selectorPrefix, elRef, }: Pick<FixedProps, "trigger" | "collapseDirection" | "collapsedSize" | "defaultCollapsible" | "onCollapse"> & {
    elRef: MutableRefObject<HTMLDivElement | null>;
    selectorPrefix: string;
}) => () => React.JSX.Element | null;

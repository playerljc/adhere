import type { CSSProperties } from 'react';
/**
 * BackTopAnimationProps
 * @interface BackTopAnimationProps
 */
export declare type BackTopAnimationProps = {
    className?: string;
    style?: CSSProperties;
    zIndex?: string | number;
    duration?: number;
    getContainer: () => HTMLElement;
    onTrigger: () => Promise<void>;
    onScrollTop?: (scrollTopVal: number) => void;
};

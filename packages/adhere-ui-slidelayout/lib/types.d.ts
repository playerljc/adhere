import { CSSProperties } from 'react';
/**
 * SlideLayoutProps
 * @interface SlideLayoutProps
 */
export interface SlideLayoutProps {
    className?: string;
    style?: CSSProperties;
    width?: string | number;
    height?: string | number;
    mask?: boolean;
    zIndex?: number | string;
    time?: number;
    collapse?: boolean;
    direction?: string;
    onAfterShow?: Function;
    onAfterClose?: Function;
    onBeforeShow?: Function;
    onBeforeClose?: Function;
    children?: any;
}
/**
 * OverlayProps
 * @interface OverlayProps
 */
export interface OverlayProps extends SlideLayoutProps {
    direction?: 'left' | 'right' | 'top' | 'bottom';
}
/**
 * SlideLayoutHandle
 */
export interface SlideLayoutHandle {
    getEl: () => HTMLElement | null;
}
/**
 * PushProps
 * @interface PushProps
 */
export interface PushProps extends SlideLayoutProps {
    masterClassName?: string;
    masterStyle?: CSSProperties;
    slaveClassName?: string;
    slaveStyle?: CSSProperties;
    direction?: 'left' | 'right';
    slide?: any;
    master?: any;
}
/**
 * RevealProps
 * @interface RevealProps
 */
export interface RevealProps extends PushProps {
}

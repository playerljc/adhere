import { CSSProperties } from 'react';

export interface Slide
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
  zIndex?: number;
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
export interface RevealProps extends PushProps {}

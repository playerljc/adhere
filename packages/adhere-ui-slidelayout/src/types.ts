import React from 'react';

/**
 * ISlideLayoutProps
 * @interface ISlideLayoutProps
 */
export interface ISlideLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  width: string | number;
  height: string | number;
  mask: boolean;
  zIndex: number;
  time: number;
  collapse: boolean;
  onAfterShow: Function;
  onAfterClose: Function;
  onBeforeShow: Function;
  onBeforeClose: Function;
  direction: string;
}

/**
 * IOverlayProps
 * @interface IOverlayProps
 */
export interface IOverlayProps extends ISlideLayoutProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
}

/**
 * IPushProps
 * @interface IPushProps
 */
export interface IPushProps extends ISlideLayoutProps {
  masterClassName?: string;
  masterStyle?: React.CSSProperties;
  slaveClassName?: string;
  slaveStyle?: React.CSSProperties;
  direction: 'left' | 'right';
  slide: React.ReactElement;
  master: React.ReactElement;
}

/**
 * IRevealProps
 * @interface IRevealProps
 */
export interface IRevealProps extends IPushProps {}

/**
 * ISlideLayoutState
 * @interface ISlideLayoutState
 */
export interface ISlideLayoutState {
  collapse: boolean;
}

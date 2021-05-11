import React from 'react';

/**
 * IBackTopAnimationProps
 * @interface IBackTopAnimationProps
 */
export interface IBackTopAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  zIndex?: string;
  duration?: number;
  target: () => HTMLElement | Window;
  onTrigger: () => Promise<null>;
  onScrollTop?: (scrollTopVal: number) => void;
}

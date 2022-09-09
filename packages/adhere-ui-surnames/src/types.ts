import type { CSSProperties } from 'react';

export interface SurnamesRefHandle {
  scrollToAnimation: (name?: string, duration?: number) => void;
  scrollTo: (name?: any) => void;
}

/**
 * SurnamesProps
 * @interface SurnamesProps
 */
export interface SurnamesProps {
  className?: string;
  style?: CSSProperties;
  position?: 'top' | 'right' | 'bottom' | 'left';
  indexes?: IndexConfig[];
  dataSource?: Record[];
  onBeforeScroll?: Function;
  onScroll?: (params?: any) => void;
}

export interface IndexConfig {
  index?: string;
  renderIndex?: Function;
  renderTitle?: Function;
  renderContent?: Function;
}

export interface Record {
  index?: string;
  data?: object[];
}

export interface Position {
  name?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  offsetTop?: number;
  offsetLeft?: number;
  width?: number;
  height?: number;
}

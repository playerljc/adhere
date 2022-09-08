import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties } from 'react';

export interface ScrollLoadHOCFunction<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  EMPTY: string;
  ERROR: string;
  NORMAL: string;
}

export interface ScrollLoadRefHandle {
  hideAll: () => void;
}

/**
 * ScrollLoadProps
 * @interface ScrollLoadProps
 */
export interface ScrollLoadProps {
  className?: string;
  style?: CSSProperties;
  getScrollContainer?: () => HTMLElement;
  loadClassName?: string;
  loadStyle?: CSSProperties;
  emptyClassName?: string;
  emptyStyle?: CSSProperties;
  errorClassName?: string;
  errorStyle?: CSSProperties;
  distance?: number;
  onScrollBottom?: (handle?: (status?: string) => void) => void;
  onEmptyClick?: () => void;
  onErrorClick?: () => void;
  renderLoading?: () => any | undefined;
  renderEmpty?: () => any | undefined;
  renderError?: () => any | undefined;
  children?: any;
}

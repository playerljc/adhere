import { CSSProperties, ReactElement } from 'react';

/**
 * SwipeOutProps
 * @interface SwipeOutProps
 */
export interface SwipeOutProps {
  className?: string;
  style?: CSSProperties;
  beforeClassName?: string;
  beforeStyle?: CSSProperties;
  afterClassName?: string;
  afterStyle?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  beforeShow?: boolean;
  afterShow?: boolean;
  direction?: 'horizontal' | 'vertical';
  before?: () => ReactElement;
  after?: () => ReactElement;
  duration?: number;
  onInit?: () => void;
  slideChangeTransitionStart?: (...args: any) => any;
  slideChangeTransitionEnd?: (...args: any) => any;
  children?: any;
}

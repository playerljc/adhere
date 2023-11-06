import { CSSProperties, NamedExoticComponent } from 'react';

import SplitGroup from './Group';

/**
 * SplitFunction
 */
export type SplitComponent = NamedExoticComponent<SplitProps> & {
  Group: typeof SplitGroup;
};

/**
 * SplitProps
 * @interface SplitProps
 */
export interface SplitProps {
  className?: string;
  style?: CSSProperties;
  direction?: 'vertical' | 'horizontal';
  size?: string | number;
  isUseMedia?: boolean;
  rootValue?: number;
}

/**
 * SplitGroupProps
 */
export interface SplitGroupProps extends SplitProps {
  children?: any;
}

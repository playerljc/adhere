import type { CSSProperties, NamedExoticComponent } from 'react';

import SpaceGroup from './Group';

export type SpaceComponent = NamedExoticComponent<SpaceProps> & {
  Group: typeof SpaceGroup;
};

/**
 * SpaceProps
 * @interface SpaceProps
 */
export interface SpaceProps {
  className?: string;
  style?: CSSProperties;
  direction?: 'vertical' | 'horizontal';
  size?: string | number;
}

/**
 * SpaceGroupProps
 */
export interface SpaceGroupProps extends SpaceProps {
  children?: any;
}

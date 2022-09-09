import { FC, FunctionComponent } from 'react';
import type { CSSProperties } from 'react';

export interface SpaceFunction<P> extends FunctionComponent<P> {
  Group: FC<SpaceGroupProps>;
}

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
export interface SpaceGroupProps {
  children?: any;
}

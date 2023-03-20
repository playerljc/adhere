import { FC, FunctionComponent, NamedExoticComponent } from 'react';

/**
 * SplitFunction
 */
export interface SplitFunction<P> extends NamedExoticComponent<P> {
  Group: FC<SplitGroupProps>;
}

/**
 * SplitProps
 * @interface SplitProps
 */
export interface SplitProps {
  className?: string;
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

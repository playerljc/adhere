import type {
  FC,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  CSSProperties,
} from 'react';

export interface RevolvingHOCFunction<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Item: FC<RevolvingItemProps>;
}

export interface RevolvingRefHandle {
  start: () => void;
  stop: () => void;
  isRunning: () => boolean;
}

/**
 * RevolvingProps
 * @interface RevolvingProps
 */
export interface RevolvingProps {
  className?: string;
  style?: CSSProperties;
  classNameWrapper?: string;
  styleWrapper?: CSSProperties;
  speed?: number;
  delay?: number;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  loop?: boolean;
  stopOnLastSlide?: boolean;
  listeners?: object;
  children?: any;
}

export interface RevolvingItemProps {
  className?: string;
  style?: CSSProperties;
  children?: any;
}

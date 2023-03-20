import { FC, NamedExoticComponent } from 'react';
import type { CSSProperties } from 'react';
export interface SpaceFunction<P> extends NamedExoticComponent<P> {
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
    isUseMedia?: boolean;
    rootValue?: number;
}
/**
 * SpaceGroupProps
 */
export interface SpaceGroupProps extends SpaceProps {
    children?: any;
}

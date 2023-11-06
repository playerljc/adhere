import type { CSSProperties, NamedExoticComponent } from 'react';
import RevolvingItem from './Item';
export type RevolvingComponent = NamedExoticComponent<RevolvingProps> & {
    Item: typeof RevolvingItem;
};
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
    swiperConfig?: any;
}
export interface RevolvingItemProps {
    className?: string;
    style?: CSSProperties;
    children?: any;
}

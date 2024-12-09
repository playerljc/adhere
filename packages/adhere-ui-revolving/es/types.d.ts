import { PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties, NamedExoticComponent } from 'react';
import type { SwiperOptions } from 'swiper/types/swiper-options';
import RevolvingItem from './Item';
export type RevolvingComponent = NamedExoticComponent<PropsWithoutRef<RevolvingProps> & RefAttributes<RevolvingRefHandle>> & {
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
    swiperConfig?: SwiperOptions;
}
export interface RevolvingItemProps {
    className?: string;
    style?: CSSProperties;
    children?: any;
}

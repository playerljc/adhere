import type { PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { CSSProperties, NamedExoticComponent } from 'react';
import type { SwiperOptions } from 'swiper/types';
export type RevolvingComponent = NamedExoticComponent<PropsWithoutRef<RevolvingProps> & RefAttributes<RevolvingRefHandle>> & {};
export interface RevolvingRefHandle {
    start: () => void;
    stop: () => void;
    isRunning: () => boolean;
}
export type RevolvingItem = RevolvingItemProps & {
    key: string;
};
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
    items?: RevolvingItem[];
    swiperConfig?: SwiperOptions;
}
export interface RevolvingItemProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

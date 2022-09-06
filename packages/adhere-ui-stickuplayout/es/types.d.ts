import { FC, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties, ReactElement } from 'react';
/**
 * StickupLayoutHOCType
 */
export interface StickupLayoutHOCType<T, P> extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
    Item?: FC<StickupLayoutItemProps>;
}
/**
 * StickupLayoutProps
 */
export interface StickupLayoutProps {
    className?: string;
    style?: CSSProperties;
    fixedClassName?: string;
    fixedStyle?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    onChange?: (index: number) => void;
    children: ReactElement<StickupLayoutItemProps>[] | null;
}
export interface StickupLayoutHandle {
    refresh: () => void;
    scrollToByIndex: (_index: number, _duration: number) => void;
    scrollToByHeaderEl: (_headerEl: HTMLElement, _duration: number) => void;
}
/**
 * StickupLayoutItemProps
 */
export interface StickupLayoutItemProps {
    className?: string;
    style?: CSSProperties;
    title?: string | ReactElement;
    content?: string | ReactElement;
}
/**
 * IndexItem
 */
export interface IndexItem {
    start: number;
    end: number;
    dom: HTMLElement;
    index: number;
}

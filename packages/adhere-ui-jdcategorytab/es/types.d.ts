import { StickupLayoutItemProps } from '@baifendian/adhere-ui-stickuplayout/lib/types';
import { CSSProperties, FC, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
export interface JdCategoryTabRefHandle {
    scrollTo: (key: string, time?: number, easing?: any) => void;
}
/**
 * JdCategoryTabHOCFunction
 */
export interface JdCategoryTabHOCFunction<T, P> extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
    Item?: FC<StickupLayoutItemProps>;
}
/**
 * JdCategoryTabProps
 * @interface JdCategoryTabProps
 */
export interface JdCategoryTabProps {
    className?: string;
    style?: CSSProperties;
    menuClassName?: string;
    menuStyle?: CSSProperties;
    menuInnerClassName?: string;
    menuInnerStyle?: CSSProperties;
    tabClassName?: string;
    tabStyle?: CSSProperties;
    menuItemClassName?: string;
    menuItemStyle?: CSSProperties;
    children?: any;
    menuData?: MenuDataItem[];
    activeKey: string;
    renderMenuItem?: Function | undefined;
    onChange?: (currentKey: string) => void;
    onBeforeChange?: (activeKey: string, currentKey: string) => boolean;
}
export interface JdCategoryTabItemProps {
    id?: string | number;
    children?: any;
    className?: string;
    style?: CSSProperties;
}
export interface MenuDataItem {
    key: string;
    name: string;
    properties: any;
}
export interface JdCategoryTabContext {
    activeKey: string;
}

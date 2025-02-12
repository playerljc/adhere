import { PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties, NamedExoticComponent } from 'react';
import JdCategoryTabItem from './Item';
export interface JdCategoryTabRefHandle {
    scrollTo: (key: string, time?: number, easing?: any) => void;
}
/**
 * JdCategoryTabHOCFunction
 */
export type JdCategoryTabComponent = NamedExoticComponent<PropsWithoutRef<JdCategoryTabProps> & RefAttributes<JdCategoryTabRefHandle>> & {
    Item: typeof JdCategoryTabItem;
};
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
    className?: string;
    style?: CSSProperties;
    children?: any;
}
export interface MenuDataItem {
    key: string;
    name: string;
    properties?: any;
}

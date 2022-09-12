import type { ReactElement, CSSProperties } from 'react';
export interface MenuRefHandle {
    mount: () => void;
}
export interface MenuProps {
    className?: string;
    style?: CSSProperties;
    data: MenuData[];
}
export interface MenuItemProps {
    data: MenuData;
}
export interface SubMenuProps extends MenuProps {
}
export interface ContextMenuContext {
    config: Config;
    el: HTMLElement | null;
}
export interface ContextMenuComponentRefHandle {
    mount: () => void;
}
export interface ContextMenuComponentProps {
    data: MenuData[];
    config: Config;
    el: HTMLElement;
}
export interface Config {
    className?: string;
    style?: CSSProperties;
    x: number;
    y: number;
    width: number;
    maskClosable: boolean;
    handler?: Function;
}
export interface MenuData {
    className?: string;
    style?: CSSProperties;
    subMenuClassName?: string;
    subMenuStyle?: CSSProperties;
    attribute?: object;
    name?: string | ReactElement;
    icon?: string | ReactElement;
    id?: string;
    disabled?: boolean;
    separation?: boolean;
    children?: MenuData[];
}

import React from 'react';
export interface IMenuProps {
    data: Array<IData>;
    className: string;
    style: React.CSSProperties;
}
export interface IMenuItemProps {
    data: IData;
}
export interface ISubMenuProps extends IMenuProps {
}
export interface IContextMenuComponentProps {
    data: Array<IData>;
    config: IData;
    el: HTMLElement;
}
export interface IConfig {
    x: number;
    y: number;
    width: number;
    maskClosable: boolean;
    handler: Function;
    className: string;
    style: React.CSSProperties;
}
export interface IData {
    name: string | React.ReactElement;
    icon: string | React.ReactElement;
    id: string;
    disabled: boolean;
    separation: boolean;
    attribute: Object;
    children: Array<IData>;
    className: string;
    style: React.CSSProperties;
    subMenuClassName: string;
    subMenuStyle: React.CSSProperties;
}

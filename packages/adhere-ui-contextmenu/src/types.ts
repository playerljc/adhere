import React from 'react';

export interface IMenuProps {
  data: Array<IData>;
  className: string;
  style: React.CSSProperties;
}

export interface IMenuItemProps {
  data: IData;
}

export interface ISubMenuProps extends IMenuProps {}

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
  name: string | React.ReactElement; // 名字
  icon: string | React.ReactElement; // 图标
  id: string; // 唯一的id
  disabled: boolean; // 不可用
  separation: boolean; // 分割线
  attribute: Object; // 自定义属性
  children: Array<IData>; // 孩子
  className: string;
  style: React.CSSProperties;
  subMenuClassName: string;
  subMenuStyle: React.CSSProperties;
}

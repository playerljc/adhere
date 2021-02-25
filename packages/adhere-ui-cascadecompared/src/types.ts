import React from 'react';

export interface IColumnConfig {
  dataIndex: string;
  isFixed: boolean;
  width: string | number;
  render: Function;
  className: string;
  style: React.CSSProperties;
}

export interface ITableConfig {
  columns: Array<IColumnConfig>;
  dataSource: Array<object>;
}

export interface IIndicatorTableConfig {
  columns: Array<IColumnConfig>;
  dataSource: object;
}

export interface IMasterItem extends ITableConfig {
  title: React.ReactElement;
  className: string;
  style: React.CSSProperties;
  fixedWrapClassName: string;
  fixedWrapStyle: React.CSSProperties;
  autoWrapClassName: string;
  autoWrapStyle: React.CSSProperties;
  autoInnerClassName: string;
  autoInnerStyle: React.CSSProperties;
}

/**
 * ICascadeComparedProps
 * @interface ICascadeComparedProps
 */
export interface ICascadeComparedProps {
  className?: string;
  style?: React.CSSProperties;
  indicatorClassName?: string;
  indicatorStyle?: React.CSSProperties;
  indicatorFixedWrapClassName?: string;
  indicatorFixedWrapStyle?: React.CSSProperties;
  indicatorAutoWrapClassName?: string;
  indicatorAutoWrapStyle?: React.CSSProperties;
  masterClassName?: string;
  masterStyle?: React.CSSProperties;
  masterInnerClassName?: string;
  masterInnerStyle?: React.CSSProperties;
  masterStickFixedClassName?: string;
  masterStickFixedStyle?: React.CSSProperties;
  masterStickInnerClassName?: string;
  masterStickInnerStyle?: React.CSSProperties;
  indicator: IIndicatorTableConfig;
  master: Array<IMasterItem>;
  onStickChange: Function;
  defaultCellWidth: number | string;
}

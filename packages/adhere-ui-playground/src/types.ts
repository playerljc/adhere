import PropTypes from "prop-types";
import React, { CSSProperties } from 'react';

/**
 * ICardProps
 */
export interface ICardProps {
  headerClassName: string;
  headerStyle: object;
  bodyClassName: string;
  bodyStyle: object;
  actionClassName: string;
  actionStyle: object;
  title: React.ReactNode;
  extra: React.ReactNode;
  description: {
    title: string | React.ReactNode,
    info: string | React.ReactNode,
  },
  actions: React.ReactNode[];
}

/**
 * ITableColumn
 */
export interface ITableColumn {
  key: string;
  dataIndex: string;
  title: React.ReactNode | string;
  width: string;
  align: 'left' | 'right' | 'center';
  valign: 'top' | 'middle' | 'bottom';
  render: (text: any, record: object, rowIndex: number, columnIndex: number) => void;
  className: string;
  style: object;
}

/**
 * ITableProps
 */
export interface ITableProps {
  className: string;
  style: CSSProperties | null;
  tableClassName: string;
  tableStyle: CSSProperties;
  columns: ITableColumn[];
  dataSource: Object[];
  rowKey: string;
}

/**
 * IPlayGroundProps
 * @interface IPlayGroundProps
 */
export interface IPlayGroundProps {
  codeText: string;
  expand?: boolean;
}

/**
 * IPlayGroundMulitProps
 */
export interface IPlayGroundMulitProps {
  config: IPlayGroundProps[];
  expand: boolean;
}

/**
 * IPlayGroundState
 * @interface IPlayGroundState
 */
export interface IPlayGroundState {
  expand: boolean;
}

/**
 * IPropsProps
 */
export interface IPropsProps {
  data: Array<{
    params: string | React.ReactNode;
    desc: string | React.ReactNode;
    type: string | React.ReactNode;
    defaultVal: string | React.ReactNode;
  }>;
}

/**
 * IFunctionProps
 */
export interface IFunctionProps {
  data: Array<{
    // 函数名称
    name: string | React.ReactNode;
    // 函数描述
    desc: string | React.ReactNode;
    // 函数修饰符
    modifier: 'static' | 'public' | 'private' | 'protected';
    // 函数参数
    params: Array<{
      // 参数名称
      name: string | React.ReactNode;
      // 参数说明
      desc: string | React.ReactNode;
      // 参数类型
      type: string | React.ReactNode;
      // 默认值
      defaultVal: string | React.ReactNode;
      // 是否必填
      required: string | boolean;
    }>;
    // 函数返回值类型
    returnType: string | React.ReactNode;
    // 函数返回值说明
    returnDesc: string | React.ReactNode;
  }>;
}

export interface ICollapseProps {
  headerClassName: string;
  headerStyle: CSSProperties | null;
  bodyClassName: string;
  bodyStyle: CSSProperties | null;
  title: React.ReactNode | string;
  extra: React.ReactNode | string;
  defaultCollapse: boolean;
  border: boolean;
  scrollY: boolean;
  fixedHeaderScrollBody: boolean;
}

export interface ICollapseState {
  collapse: boolean;
}

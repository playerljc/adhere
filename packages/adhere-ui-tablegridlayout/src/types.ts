import type { CSSProperties, NamedExoticComponent, ReactElement, ReactNode } from 'react';

import Label from './Label';
import Value from './Value';

export type DensityType = 'default' | 'middle' | 'small' | undefined;

export type LayoutType = 'vertical' | 'horizontal';

/**
 * RowCountRef
 */
export interface RowCountRef {
  current: number;
}

/**
 * RenderHorizontal
 */
export interface RenderHorizontal {
  (params: { data: DataItem; rowCountRef?: RowCountRef }): {
    element: ReactElement[];
    detail: GroupRenderDetail;
  };
}

/**
 * RenderVertical
 */
export interface RenderVertical {
  (data: DataItem, rowCountRef): {
    element: ReactElement[];
    detail: GroupRenderDetail;
  };
}

/**
 * RenderGridSearchForm
 */
export interface RenderGridSearchForm {
  (params: {
    data: DataItem;
    rowCountRef?: RowCountRef;
    layout?: LayoutType;
    density?: DensityType;
    parity?: boolean;
  }): ReactElement;
}

/**
 * DataItem
 * @interface DataItem
 */
export interface DataItem {
  className?: string;
  style?: CSSProperties;
  name?: string;
  width?: string | number;
  defaultLabelWidth?: number;
  padding?: string;
  colgroup?: (number | 'auto')[];
  columnCount?: number;
  data?: {
    key: string;
    require?: boolean;
    label: any;
    value: any;
    show?: boolean;
  }[];
}

/**
 * TableGridLayoutProps
 * @interface TableGridLayoutProps
 */
export interface TableGridLayoutProps {
  bordered?: boolean;
  innerClassName?: string;
  innerStyle?: CSSProperties;
  data?: DataItem[];
  className?: string;
  style?: CSSProperties;
  layout: LayoutType;
  density?: DensityType;
  parity?: boolean;
}

/**
 * GroupDetail
 * @description 组的渲染细节
 */
export type GroupRenderDetail = {
  // 一行开始数据的索引
  startIndex: number;
  // 一行结束数据的索引
  endIndex: number;
}[];

/**
 * RenderDetail
 * @description 渲染细节
 */
export interface RenderDetail {
  // 总行数
  rowCount: number;
  // 渲染时候的布局
  layout: LayoutType;
  // 细节
  detail: {
    // 组名称
    name: string;
    // 总行数
    rowCount: number;
    // 细节
    detail: GroupRenderDetail;
  }[];
}

export type TableGridLayoutComponent = NamedExoticComponent<TableGridLayoutProps> & {
  propTypes: object;
  defaultProps: object;
  Label: typeof Label;
  Value: typeof Value;
  renderGridSearchFormGroup(
    data?: DataItem[],
    props?: Omit<TableGridLayoutProps, 'data'>,
  ): ReactNode;
  getRenderDetail(data: DataItem[], props: Omit<TableGridLayoutProps, 'data'>): RenderDetail;
};

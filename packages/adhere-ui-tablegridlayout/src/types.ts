/**
 * IDataItem
 * @interface IDataItem
 */
export interface IDataItem {
  className?: string;
  style?: object;
  name?: string;
  width?: string | number;
  defaultLabelWidth?: number;
  padding?: string;
  colgroup?: (number | 'auto' | undefined)[];
  columnCount?: number;
  data?: Array<{
    key: string;
    label: JSX.Element;
    value: JSX.Element;
  }>;
}

/**
 * ITableGridLayoutProps
 * @interface ITableGridLayoutProps
 */
export interface ITableGridLayoutProps {
  className?: string;
  style?: object;
  innerClassName?: string;
  innerStyle?: object;
  bordered?: boolean;
  layout: 'horizontal' | 'vertical';
  density?: string | number;
  parity?: boolean;
  data: IDataItem[];
}

/**
 * GroupDetail
 * @description 组的渲染细节
 */
export type GroupRenderDetail = Array<{
  // 一行开始数据的索引
  startIndex: number;
  // 一行结束数据的索引
  endIndex: number;
}>;

/**
 * RenderDetail
 * @description 渲染细节
 */
export type RenderDetail = {
  // 总行数
  rowCount: number;
  // 渲染时候的布局
  layout: 'horizontal' | 'vertical';
  // 细节
  detail: Array<{
    // 组名称
    name: string;
    // 总行数
    rowCount: number;
    // 细节
    detail: GroupRenderDetail;
  }>;
};

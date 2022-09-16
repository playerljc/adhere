import type { TableProps } from 'antd/lib/table/Table';
import type {
  ColumnType, // FilterValue,
  // SorterResult,
  // TableCurrentDataSource,
  // TablePaginationConfig,
  // TableRowSelection,
} from 'antd/lib/table/interface';
import { RefObject } from 'react';
import type { CSSProperties, ReactElement } from 'react';

import type { SuspenseProps, SuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';

export interface ColumnTypeExt extends ColumnType<any> {
  authorized?: () => boolean;
  resizable?: boolean;
}

/**
 * SearchTableProps
 * @interface SearchTableProps
 */
export interface SearchTableProps extends SuspenseProps {
  className?: string;
  style?: CSSProperties;
  tableClassName: string;
  tableStyle: CSSProperties;
  searchClassName: string;
  searchStyle: CSSProperties;
  firstLoading: ReactElement;
  // antdTable的Props
  antdTableProps: TableProps<any>;
  // 是否有展开和收缩的功能
  isShowExpandSearch: boolean;
  // 展开和收缩的默认状态
  defaultExpandSearchCollapse: boolean;
  // 撑开search
  fitSearch: boolean;
  // 撑开表格
  fitTable: boolean;
  // 是否是查询固定，表格自适应
  autoFixed: boolean;
  // 锁定列头，表格滚动
  fixedHeaderAutoTable: boolean;
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedTableSpaceBetween: boolean;
  // 是否显示列设置
  showColumnSetting: boolean;
}

/**
 * SearchTableState
 * @interface SearchTableState
 */
export interface SearchTableState extends SuspenseState {
  [props: string]: any;
  page?: number;
  limit?: number;
  expand?: boolean;
  scrollY?: number;
  columnSetting?: Array<ColumnType<any> & { sort: number; display: boolean }>;
  tableDensity?: TableDensity;
}

export interface ISearchTableImplement {
  /**
   * showLoading - 是否显示遮罩
   */
  showLoading(): boolean;

  /**
   * fetchData - 加载数据
   */
  fetchData(): void;
}

/**
 * SearchTableImplementProps
 * @interface SearchTableImplementProps
 */
export interface SearchTableImplementProps extends SearchTableProps {
  [props: string]: any;
  getTableWrapperInstance?: (ref?: RefObject<HTMLDivElement>) => void;
}

export interface SearchTableImplementState extends SearchTableState {
  [props: string]: any;
  selectedRowKeys?: string[];
  selectedRows?: any[];
  searchParams?: any;
}

/**
 * TableDensity
 */
export enum TableDensity {
  DEFAULT = 'default',
  MIDDLE = 'middle',
  SMALL = 'small',
}

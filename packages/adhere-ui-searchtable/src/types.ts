import type { TableProps } from 'antd/lib/table/Table';
import type {
  ColumnType, // FilterValue,
  // SorterResult,
  // TableCurrentDataSource,
  // TablePaginationConfig,
  // TableRowSelection,
} from 'antd/lib/table/interface';
import PropTypes from 'prop-types';
import { RefObject } from 'react';
import type { CSSProperties, ReactElement, ReactNode } from 'react';

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

export interface AdvancedSearchPanelGroupData {
  className: string;
  style: CSSProperties;
  // group名称
  name: string;
  // group的宽度，默认是100%
  width: string | number;
  // 缺省的Label宽度
  defaultLabelWidth: number;
  // 缺省的padding
  padding: number;
  // 列设置 auto表示自适应
  colgroup: number[];
  // 列数
  columnCount: number;
  data: {
    key: string;
    // Label组件
    label: ReactNode;
    // Value组件
    value: ReactNode;
  }[];
}

export interface AdvancedSearchPanelTableGridLayoutConfig {
  className?: string;
  style?: CSSProperties;
  innerClassName?: string;
  innerStyle?: CSSProperties;
  // 是否有边框
  bordered: boolean;
  // 布局
  layout: 'horizontal' | 'vertical';
  // 密度
  density?: string | number;
  // 是否是奇偶数不同色
  parity?: boolean;
}

export interface AdvancedSearchPanelSearchConfig {
  rowCount: string;
  showStrategy: string;
  advancedSearch: {
    className: string;
    style: CSSProperties;
    width: number | string;
    mask: boolean;
    zIndex: number;
    time: number;
    direction: string;
    collapse: boolean;
    getPopupContainer: Function;
    onBeforeShow: Function;
    onBeforeClose: Function;
    onAfterShow: Function;
    onAfterClose: Function;
  };
  renderTitleLabel?: Function;
  renderCollapse?: Function;
  renderSearchButton?: Function;
  insertSearchButton?: Function;
}

export interface AdvancedSearchPanelProps {
  groupData: AdvancedSearchPanelGroupData[];
  tableGridLayoutConfig: AdvancedSearchPanelTableGridLayoutConfig;
  remainingGroupData: AdvancedSearchPanelGroupData[];
  advancedSearchConfig: AdvancedSearchPanelSearchConfig;
  onSearch: Function;
  onReset: Function;
  onCollapse: Function;
}

/**
 * TableDensity
 */
export enum TableDensity {
  DEFAULT = 'default',
  MIDDLE = 'middle',
  SMALL = 'small',
}

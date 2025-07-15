import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ListProps } from 'antd/lib/list';
import { TableProps, ColumnType } from 'antd/lib/table';
import { TooltipProps } from 'antd/lib/tooltip';
import { FormInstance } from 'antd/lib/form';
import type { ReactElement, ReactNode } from 'react';

import { ColumnItemProps } from '@baifendian/adhere-ui-formitemcreator/lib/types';

/**
 * 表格列表组件的核心属性接口
 * @template T - 数据记录类型
 */
export interface TableListProps<T = any> {
  /** 自定义类名 */
  className?: string;
  /** 显示模式：表格或列表 */
  mode?: 'table' | 'list';
  /** 搜索栏配置 */
  search?: SearchProps;
  /** 工具栏配置 */
  toolbar?: ToolbarProps;
  /** 表格模式配置 */
  table?: ITableProps<T>;
  /** 列表模式配置 */
  list?: ListProps<T>;
  /** 数据请求函数 */
  request?: (params: Record<string, any>) => Promise<any>;
}

/**
 * 表格属性扩展接口
 * @template RecordType - 数据记录类型
 */
export interface ITableProps<RecordType = any> extends TableProps<RecordType> {
  /** 是否支持拖拽排序 */
  sortable?: boolean | SortableProps;
  /** 是否显示序号列 */
  showNumber?: boolean | ShowNumberProps;
}

/**
 * 可排序表格属性接口
 * @template RecordType - 数据记录类型
 */
export interface TSortTableProps<RecordType = any> extends TableProps<RecordType> {
  /** 拖拽排序配置 */
  sortable?: boolean | SortableProps;
  [key: string]: any;
}

/**
 * 序号列配置
 */
export interface ShowNumberProps {
  /** 序号列标题 */
  title?: string;
  /** 序号列宽度 */
  width?: number;
  /** 序号列键名 */
  key?: string;
  /** 自定义渲染函数 */
  render?: (value: any, record: any, index: number) => ReactNode;
}

/**
 * 搜索栏配置接口
 */
export interface SearchProps {
  /** 搜索栏类名 */
  className?: string;
  /** 搜索栏前内容 */
  beforeContent?: ReactNode;
  /** 搜索栏后内容 */
  afterContent?: ReactNode;
  /** 搜索表单列配置 */
  columns?: ColumnItemProps[];
  /** 是否显示操作按钮 */
  optionRender?: boolean | ReactElement;
  /** 搜索按钮文本 */
  searchText?: string;
  /** 重置按钮文本 */
  resetText?: string;
  /** 组件尺寸 */
  size?: SizeType;
}

/**
 * 拖拽排序配置
 */
export interface SortableProps {
  /** 拖拽项属性 */
  itemProps?: Record<string, any>;
  /** 拖拽容器属性 */
  containerProps?: Record<string, any>;
}

/**
 * 工具栏配置接口
 */
export interface ToolbarProps {
  /** 工具栏类名 */
  className?: string;
  /** 工具栏标题 */
  title?: ReactNode;
  /** 总数显示配置 */
  total?: boolean | string | ReactElement;
  /** 全选配置 */
  selectAll?: boolean | ToolbarSelectAllProps;
  /** 工具栏搜索配置 */
  search?: ColumnItemProps[];
  /** 刷新按钮配置 */
  reload?: boolean | ReloadProps;
  /** 设置按钮配置 */
  setting?: boolean | SettingProps;
  /** 自定义工具栏选项 */
  toolbarOptionRender?: ReactElement;
}

/**
 * 工具栏全选配置
 */
export interface ToolbarSelectAllProps {
  /** 是否显示总数 */
  total?: boolean;
  /** 全选标题 */
  title?: string;
  /** Tooltip 属性 */
  [key: string]: any;
}

/**
 * 刷新按钮配置
 */
export interface ReloadProps {
  /** 自定义渲染 */
  render?: ReactElement;
  /** Tooltip 属性 */
  [key: string]: any;
}

/**
 * 设置按钮配置
 */
export interface SettingProps {
  /** 自定义渲染 */
  render?: ReactElement;
  /** Popover 配置 */
  Popover?: Record<string, any>;
  /** Tooltip 属性 */
  [key: string]: any;
}

/**
 * 表格列表组件状态接口
 */
export interface TableListState {
  /** 是否首次加载 */
  firstLoading: boolean;
  /** 是否首次请求 */
  firstRequest?: boolean;
  /** 加载状态 */
  loading: boolean;
  /** 选中的列键 */
  selectedColumnKeys: string[];
  /** 表格列配置 */
  tableColumns: ColumnType<any>[];
  /** 查询参数 */
  params: {
    page: number;
    limit: number;
    [key: string]: any;
  };
  /** 选中的行键 */
  selectedRowKeys?: any[];
  /** 选中的行数据 */
  selectedRows?: any[];
  /** 全选状态 */
  selectAll?: boolean | { exceptKeys: any[] };
}

/**
 * 可排序表格状态接口
 */
export interface SortableTableState {
  /** 数据源 */
  dataSource: any[];
  /** 是否正在排序 */
  isSort: boolean;
}

/**
 * 工具类实例接口
 */
export interface UtilInstance {
  ins: any;
  getModeProps: () => any;
  getDefaultSelectedColumnKeys: (columns: any[]) => string[];
  getRowSelection: () => any;
  getSortDataSource: () => any[];
  getParams: () => Record<string, any>;
  getFormColumns: (columns: any[], size: SizeType, searchNow: boolean) => any[];
  getPagination: (pagination: any) => any;
  getTableColumns: () => ColumnType<any>[];
  getLoading: (loading: any) => any;
  fetchList: (params?: Record<string, any>) => void;
  onSearch: (searchParams: Record<string, any>) => void;
  onResetSearch: () => void;
  onSettingChange: (selectedColumnKeys: string[]) => void;
  onSettingSortEnd: (params: { oldIndex: number; newIndex: number }) => void;
  onTableChange: (keys: any, filters: any, sorter: any) => void;
  onSelectChange: (selectedRowKeys: any[], selectedRows: any[]) => void;
  onPageChange: (page: number, limit: number) => void;
  onDelete: (deletedKeys?: any[]) => void;
}

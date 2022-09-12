import type { ReactElement } from 'react';
import { ColumnItemProps } from '@baifendian/adhere-ui-formitemcreator/lib/types';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { TableProps } from 'antd/lib/table';
import { ListProps } from 'antd/lib/list';
import { TooltipProps } from 'antd/lib/tooltip';

/**
 * TableListProps
 * @interface TableListProps
 */
export interface TableListProps<T> {
  className?: string;
  mode?: 'table' | 'list';
  search?: SearchProps;
  toolbar?: ToolbarProps;
  table?: ITableProps<T>;
  list?: ListProps<T>;
  request?: Function;
}

export interface ITableProps<RecordType> extends TableProps<RecordType> {
  sortable?: boolean | SortableProps;
  showNumber?: boolean | object;
}

export interface TSortTableProps<RecordType> extends TableProps<RecordType> {
  sortable?: boolean | SortableProps;
  [proName: string]: any;
}

/**
 * 搜索栏
 */
export interface SearchProps {
  className?: string;
  beforeContent?: string | number | ReactElement;
  afterContent?: string | number | ReactElement;
  columns?: ColumnItemProps;
  optionRender?: boolean | ReactElement;
  searchText?: string;
  resetText?: string;
  size?: SizeType;
}

export interface SortableProps {
  itemProps?: object;
  containerProps?: object;
}

/**
 * 工具栏
 */
export interface ToolbarProps {
  className?: string;
  title?: string | ReactElement;
  total?: boolean | string | ReactElement;
  selectAll?: boolean | ToolbarSelectAllProps;
  search?: ColumnItemProps;
  reload?: boolean | object;
  setting?: boolean | object;
  toolbarOptionRender?: undefined | ReactElement;
}

/**
 * 工具栏-选中全部
 */
export type ToolbarSelectAllProps = TooltipProps & {
  total?: boolean;
};

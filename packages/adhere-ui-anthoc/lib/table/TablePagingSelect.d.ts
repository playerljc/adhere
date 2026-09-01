import React from 'react';
import type { DisplayNameInternal, TablePagingSelectProps } from '../types';
/**
 * TablePagingSelect
 * @param loadData
 * @param tablePagingProps
 * @param optionFilterProp 服务器搜索时用于构造查询参数的字段名，未传入时默认 'label'
 * @param localFilter 是否本地过滤，默认 true；设为 false 时走服务器搜索
 * @param searchDebounceWait 服务器搜索时连续输入的防抖等待时间（ms），默认 300
 * @param props
 * @constructor
 */
declare const InternalTablePagingSelect: React.NamedExoticComponent<TablePagingSelectProps<any>>;
declare const TablePagingSelect: DisplayNameInternal<typeof InternalTablePagingSelect>;
export default TablePagingSelect;

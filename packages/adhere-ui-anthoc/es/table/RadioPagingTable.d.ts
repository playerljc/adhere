import React from 'react';
import type { DisplayNameInternal, RadioPagingTableProps } from '../types';
/**
 * RadioPagingTable
 * @description 分页单选的Table
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
declare const InternalRadioPagingTable: React.NamedExoticComponent<RadioPagingTableProps>;
declare const RadioPagingTable: DisplayNameInternal<typeof InternalRadioPagingTable>;
export default RadioPagingTable;

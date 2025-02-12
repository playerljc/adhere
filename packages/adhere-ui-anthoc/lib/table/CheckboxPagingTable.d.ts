import React from 'react';
import type { CheckboxPagingTableProps, DisplayNameInternal } from '../types';
/**
 * CheckboxPagingTable
 * @description 分页多选的Table
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
declare const InternalCheckboxPagingTable: React.NamedExoticComponent<CheckboxPagingTableProps>;
declare const CheckboxPagingTable: DisplayNameInternal<typeof InternalCheckboxPagingTable>;
export default CheckboxPagingTable;

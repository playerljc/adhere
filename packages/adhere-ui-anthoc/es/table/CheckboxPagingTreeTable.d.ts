import React from 'react';
import type { CheckboxPagingTreeTableProps, DisplayNameInternal } from '../types';
/**
 * CheckboxPagingTreeTable
 * @description 分页多选的Table
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
declare const InternalCheckboxPagingTreeTable: React.NamedExoticComponent<CheckboxPagingTreeTableProps>;
declare const CheckboxPagingTreeTable: DisplayNameInternal<typeof InternalCheckboxPagingTreeTable>;
export default CheckboxPagingTreeTable;

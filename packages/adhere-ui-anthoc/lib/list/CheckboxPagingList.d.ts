import React from 'react';
import type { CheckboxPagingListProps, DisplayNameInternal } from '../types';
/**
 * CheckboxPagingList
 * @description 分页多选的List
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
declare const InternalCheckboxPagingList: React.NamedExoticComponent<CheckboxPagingListProps>;
declare const CheckboxPagingList: DisplayNameInternal<typeof InternalCheckboxPagingList>;
export default CheckboxPagingList;

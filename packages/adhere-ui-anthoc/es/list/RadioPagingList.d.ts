import React from 'react';
import type { DisplayNameInternal, RadioPagingListProps } from '../types';
/**
 * RadioPagingList
 * @description 分页单选的List
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
declare const InternalRadioPagingList: React.NamedExoticComponent<RadioPagingListProps>;
declare const RadioPagingList: DisplayNameInternal<typeof InternalRadioPagingList>;
export default RadioPagingList;

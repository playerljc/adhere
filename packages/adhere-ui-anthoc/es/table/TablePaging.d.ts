import React from 'react';
import type { DisplayNameInternal, TablePagingProps } from '../types';
/**
 * TablePaging
 * @param mode
 * @param value
 * @param onChange
 * @param pagingProps
 * @param tablePagingProps
 * @param isSuspenseAsync
 * @param suspenseProps
 * @constructor
 */
declare const InternalTablePaging: React.NamedExoticComponent<TablePagingProps<any>>;
declare const TablePaging: DisplayNameInternal<typeof InternalTablePaging>;
export default TablePaging;

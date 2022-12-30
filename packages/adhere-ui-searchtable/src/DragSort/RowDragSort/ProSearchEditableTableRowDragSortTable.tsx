import React from 'react';

import { MemoManager } from '../../Extension/SearchAndPaginParams';
import ProTableFactory from '../../ProTableFactory';
import SearchEditableTableRowDragSortTable from './SearchEditableTableRowDragSortTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchEditableTableRowDragSortTable
 * @classdesc 可以进行编辑单元格且进行行拖拽排序的高级表格
 */
export default ProTableFactory(SearchEditableTableRowDragSortTable, SearchAndPaginParamsMemo);

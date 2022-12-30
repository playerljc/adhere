import React from 'react';

import { MemoManager } from '../../Extension/SearchAndPaginParams';
import ProTableFactory from '../../ProTableFactory';
import SearchEditableCellRowDragSortStateTable from './SearchEditableCellRowDragSortStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchEditableCellRowDragSortStateTable
 * @classdesc 可以进行编辑单元格且进行行拖拽排序的高级表格
 */
export default ProTableFactory(SearchEditableCellRowDragSortStateTable, SearchAndPaginParamsMemo);

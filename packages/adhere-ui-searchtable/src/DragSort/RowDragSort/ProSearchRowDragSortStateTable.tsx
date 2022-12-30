import React from 'react';

import { MemoManager } from '../../Extension/SearchAndPaginParams';
import ProTableFactory from '../../ProTableFactory';
import SearchRowDragSortStateTable from './SearchRowDragSortStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchRowDragSortStateTable
 * @classdesc 可以进行行拖拽排序的高级表格
 */
export default ProTableFactory(SearchRowDragSortStateTable, SearchAndPaginParamsMemo);

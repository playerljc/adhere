import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditableCellStateTable from './SearchEditableCellStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditableCellSearchStateTable
 * @classdesc 可以进行单元格编辑的高级表格
 */
export default ProTableFactory(SearchEditableCellStateTable, SearchAndPaginParamsMemo);

import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditableCellTable from './SearchEditableCellTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditableCellSearchTable
 * @classdesc 可以进行单元格编辑的高级表格
 */
export default ProTableFactory(SearchEditableCellTable, SearchAndPaginParamsMemo);

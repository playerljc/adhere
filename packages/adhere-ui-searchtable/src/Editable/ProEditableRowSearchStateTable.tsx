import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditableRowStateTable from './SearchEditableRowStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditableRowSearchStateTable
 * @classdesc 可以进行行编辑的高级查询表格
 */
export default ProTableFactory(SearchEditableRowStateTable, SearchAndPaginParamsMemo);

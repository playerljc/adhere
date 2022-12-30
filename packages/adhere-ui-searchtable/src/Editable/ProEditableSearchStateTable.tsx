import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditableStateTable from './SearchEditableStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditableSearchStateTable
 * @classdesc 可以进行行编辑的高级查询表格
 */
export default ProTableFactory(SearchEditableStateTable, SearchAndPaginParamsMemo);

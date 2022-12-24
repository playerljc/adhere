import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditableTable from './SearchEditableTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditableSearchTable
 * @classdesc 可以进行编辑的高级查询表格
 */
export default ProTableFactory(SearchEditableTable, SearchAndPaginParamsMemo);

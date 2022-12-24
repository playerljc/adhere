import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditableRowTable from './SearchEditableRowTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditableRowSearchTable
 * @classdesc 可以进行行编辑的高级查询表格
 */
export default ProTableFactory(SearchEditableRowTable, SearchAndPaginParamsMemo);

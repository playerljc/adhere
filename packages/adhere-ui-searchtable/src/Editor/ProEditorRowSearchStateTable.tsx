import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditorRowStateTable from './SearchEditorRowStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorRowSearchStateTable
 * @classdesc 可以进行行编辑的高级查询表格
 */
export default ProTableFactory(SearchEditorRowStateTable, SearchAndPaginParamsMemo);

import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditorRowTable from './SearchEditorRowTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorRowSearchTable
 * @classdesc 可以进行行编辑的高级查询表格
 */
export default ProTableFactory(SearchEditorRowTable, SearchAndPaginParamsMemo);

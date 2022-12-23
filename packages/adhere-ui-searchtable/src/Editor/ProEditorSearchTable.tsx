import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditorTable from './SearchEditorTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorSearchTable
 * @classdesc 可以进行编辑的高级查询表格
 */
export default ProTableFactory(SearchEditorTable, SearchAndPaginParamsMemo);

import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditorCellTable from './SearchEditorCellTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorCellSearchTable
 * @classdesc 可以进行单元格编辑的高级表格
 */
export default ProTableFactory(SearchEditorCellTable, SearchAndPaginParamsMemo);

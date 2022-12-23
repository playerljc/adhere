import React from 'react';

import { MemoManager } from '../Extension/SearchAndPaginParams';
import ProTableFactory from '../ProTableFactory';
import SearchEditorCellStateTable from './SearchEditorCellStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorCellSearchStateTable
 * @classdesc 可以进行单元格编辑的高级表格
 */
export default ProTableFactory(SearchEditorCellStateTable, SearchAndPaginParamsMemo);

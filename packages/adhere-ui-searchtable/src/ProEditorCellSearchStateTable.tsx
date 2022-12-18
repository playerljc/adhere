import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import SearchEditorCellStateTable from './SearchEditorCellStateTable';
import { SearchTableImplementState, SearchTableStateImplementProps } from './types';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorCellSearchStateTable
 * @classdesc 高级查询表格
 */
class ProEditorCellSearchStateTable extends SearchEditorCellStateTable<
  SearchTableStateImplementProps,
  SearchTableImplementState
> {}

export default ProTableFactory(ProEditorCellSearchStateTable, SearchAndPaginParamsMemo);

import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import SearchEditorCellTable from './SearchEditorCellTable';
import type { SearchTableImplementProps, SearchTableImplementState } from './types';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorCellSearchTable
 * @classdesc 高级查询表格
 */
class ProEditorCellSearchTable extends SearchEditorCellTable<
  SearchTableImplementProps,
  SearchTableImplementState
> {}

export default ProTableFactory(ProEditorCellSearchTable, SearchAndPaginParamsMemo);

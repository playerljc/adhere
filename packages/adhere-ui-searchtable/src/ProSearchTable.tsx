import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import SearchEditorRowTable from './SearchEditorRowTable';
import type { SearchEditorRowTableState, SearchTableImplementProps } from './types';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchTable
 * @classdesc 高级查询表格
 */
class ProSearchTable extends SearchEditorRowTable<
  SearchTableImplementProps,
  SearchEditorRowTableState
> {}

export default ProTableFactory(ProSearchTable, SearchAndPaginParamsMemo);

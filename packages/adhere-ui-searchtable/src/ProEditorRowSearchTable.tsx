import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import SearchEditorRowTable from './SearchEditorRowTable';
import type { SearchEditorRowTableState, SearchTableImplementProps } from './types';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorRowSearchTable
 * @classdesc 高级查询表格
 */
class ProEditorRowSearchTable extends SearchEditorRowTable<
  SearchTableImplementProps,
  SearchEditorRowTableState
> {}

export default ProTableFactory(ProEditorRowSearchTable, SearchAndPaginParamsMemo);

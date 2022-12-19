import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import SearchEditorTable from './SearchEditorTable';
import type { SearchEditorTableState, SearchTableImplementProps } from './types';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorSearchTable
 * @classdesc 可以进行编辑的高级查询表格
 */
class ProEditorSearchTable extends SearchEditorTable<
  SearchTableImplementProps,
  SearchEditorTableState
> {}

export default ProTableFactory(ProEditorSearchTable, SearchAndPaginParamsMemo);

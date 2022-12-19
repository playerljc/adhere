import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import SearchEditorStateTable from './SearchEditorStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProEditorSearchStateTable
 * @classdesc 可以进行行编辑的高级查询表格
 */
class ProEditorSearchStateTable extends SearchEditorStateTable {}

export default ProTableFactory(ProEditorSearchStateTable, SearchAndPaginParamsMemo);

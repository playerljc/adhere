import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import SearchEditorRowStateTable from './SearchEditorRowStateTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchStateTable
 * @classdesc 高级查询表格
 */
class ProEditorRowSearchStateTable extends SearchEditorRowStateTable {}

export default ProTableFactory(ProEditorRowSearchStateTable, SearchAndPaginParamsMemo);

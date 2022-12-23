import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import { SearchTableStateImplement } from './SearchTableStateImplement';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchStateTable
 * @classdesc 高级查询表格
 */
export default ProTableFactory(SearchTableStateImplement, SearchAndPaginParamsMemo);

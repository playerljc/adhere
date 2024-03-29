import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import { SearchTableImplement } from './SearchTableImplement';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchTable
 * @classdesc 高级查询表格
 */
export default ProTableFactory(SearchTableImplement, SearchAndPaginParamsMemo);

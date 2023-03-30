import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import ProListFactory from './ProListFactory';
import { SearchListStateImplement } from './SearchListStateImplement';

const {
  SearchAndPaginParams: { MemoManager },
} = SearchTable;

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchStateList
 * @classdesc 高级查询列表
 */
export default ProListFactory(SearchListStateImplement, SearchAndPaginParamsMemo);

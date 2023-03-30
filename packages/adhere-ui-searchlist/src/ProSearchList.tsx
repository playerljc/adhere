import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import ProListFactory from './ProListFactory';
import { SearchListImplement } from './SearchListImplement';

const {
  SearchAndPaginParams: { MemoManager },
} = SearchTable;

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchList
 * @classdesc 高级查询列表
 */
export default ProListFactory(SearchListImplement, SearchAndPaginParamsMemo);

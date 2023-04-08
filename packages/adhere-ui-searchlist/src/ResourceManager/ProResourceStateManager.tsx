import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import ProListFactory from '../ProListFactory';
import ProResourceManagerFactory from './ProResourceManagerFactory';
import ResourceStateManager from './ResourceStateManager';

const {
  SearchAndPaginParams: { MemoManager },
} = SearchTable;

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProResourceStateManager
 * @classdesc 高级查询列表
 */
export default ProResourceManagerFactory(
  ProListFactory(ResourceStateManager, SearchAndPaginParamsMemo),
);

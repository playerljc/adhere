import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import ProListFactory from '../ProListFactory';
import ProResourceManagerFactory from './ProResourceManagerFactory';
import ResourceManager from './ResourceManager';

const {
  SearchAndPaginParams: { MemoManager },
} = SearchTable;

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProResourceManager
 * @classdesc 高级查询列表
 */

const ProResourceManager = ProResourceManagerFactory(
  ProListFactory(ResourceManager, SearchAndPaginParamsMemo),
);

ProResourceManager.displayName = 'ProResourceManager';

export default ProResourceManager;

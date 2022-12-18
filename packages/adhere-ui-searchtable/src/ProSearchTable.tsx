import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import { SearchTableImplement } from './SearchTableImplement';
import type { SearchTableImplementProps, SearchTableImplementState } from './types';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchTable
 * @classdesc 高级查询表格
 */
class ProSearchTable extends SearchTableImplement<
  SearchTableImplementProps,
  SearchTableImplementState
> {}

export default ProTableFactory(ProSearchTable, SearchAndPaginParamsMemo);

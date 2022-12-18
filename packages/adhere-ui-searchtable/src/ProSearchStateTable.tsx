import React from 'react';

import { MemoManager } from './Extension/SearchAndPaginParams';
import ProTableFactory from './ProTableFactory';
import { SearchTableStateImplement } from './SearchTableStateImplement';
import { SearchTableImplementState, SearchTableStateImplementProps } from './types';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchStateTable
 * @classdesc 高级查询表格
 */
class ProSearchStateTable extends SearchTableStateImplement<
  SearchTableStateImplementProps,
  SearchTableImplementState
> {}

export default ProTableFactory(ProSearchStateTable, SearchAndPaginParamsMemo);

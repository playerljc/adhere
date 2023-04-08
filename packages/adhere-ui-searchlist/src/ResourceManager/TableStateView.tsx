import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';
import type {
  SearchTableImplementState,
  SearchTableStateImplementProps,
} from '@baifendian/adhere-ui-searchtable/es/types';

import TableViewFactory from './TableViewFactory';

const { TableStateImplement } = SearchTable;

/**
 * TableStateView
 * @class
 * @classdesc TableStateView
 */
class TableStateView<
  P extends SearchTableStateImplementProps,
  S extends SearchTableImplementState,
> extends TableViewFactory<SearchTableStateImplementProps, SearchTableImplementState>(
  TableStateImplement,
) {}

export default TableStateView;

import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';
import type {
  SearchTableImplementProps,
  SearchTableImplementState,
} from '@baifendian/adhere-ui-searchtable/es/types';

import TableViewFactory from './TableViewFactory';

const { TableImplement } = SearchTable;

/**
 * TableView
 * @class
 * @classdesc TableView
 */
class TableView<
  P extends SearchTableImplementProps,
  S extends SearchTableImplementState,
> extends TableViewFactory<SearchTableImplementProps, SearchTableImplementProps>(TableImplement) {
  static displayName = 'TableView';
}

export default TableView;

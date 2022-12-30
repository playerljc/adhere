import React from 'react';

import SearchEditableCellTable from '../../Editable/SearchEditableCellTable';
import { SearchTableImplement } from '../../SearchTableImplement';
import { SearchTableImplementProps, SearchTableImplementState } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortTable from './SearchRowDragSortTable';

const SearchEditableCellRowDragSortTable = RowDragSortMultiExtend<
  SearchTableImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableImplement,
  [SearchEditableCellTable, SearchRowDragSortTable],
  SearchRowDragSortTable,
);

export default SearchEditableCellRowDragSortTable;

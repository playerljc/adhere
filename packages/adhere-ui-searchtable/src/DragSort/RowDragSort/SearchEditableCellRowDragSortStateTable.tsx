import React from 'react';

import SearchEditableCellStateTable from '../../Editable/SearchEditableCellStateTable';
import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortStateTable from './SearchRowDragSortStateTable';

const SearchEditableCellRowDragSortStateTable = RowDragSortMultiExtend<
  SearchTableStateImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableStateImplement,
  [SearchEditableCellStateTable, SearchRowDragSortStateTable],
  SearchRowDragSortStateTable,
);

export default SearchEditableCellRowDragSortStateTable;

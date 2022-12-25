import React from 'react';

import SearchEditableRowTable from '../../Editable/SearchEditableRowTable';
import { SearchTableImplement } from '../../SearchTableImplement';
import { SearchTableImplementProps, SearchTableImplementState } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortTable from './SearchRowDragSortTable';

const SearchEditableRowDragSortTable = RowDragSortMultiExtend<
  SearchTableImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableImplement,
  [SearchEditableRowTable, SearchRowDragSortTable],
  SearchRowDragSortTable,
);

export default SearchEditableRowDragSortTable;

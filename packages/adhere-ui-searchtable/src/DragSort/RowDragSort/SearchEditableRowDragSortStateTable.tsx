import React from 'react';

import SearchEditableRowStateTable from '../../Editable/SearchEditableRowStateTable';
import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortStateTable from './SearchRowDragSortStateTable';

const SearchEditableRowDragSortStateTable = RowDragSortMultiExtend<
  SearchTableStateImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableStateImplement,
  [SearchEditableRowStateTable, SearchRowDragSortStateTable],
  SearchRowDragSortStateTable,
);

export default SearchEditableRowDragSortStateTable;

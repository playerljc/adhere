import React from 'react';

import SearchEditableStateTable from '../../Editable/SearchEditableStateTable';
import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortStateTable from './SearchRowDragSortStateTable';

const SearchEditableTableRowDragSortStateTable = RowDragSortMultiExtend<
  SearchTableStateImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableStateImplement,
  [SearchEditableStateTable, SearchRowDragSortStateTable],
  null,
  {
    render() {
      const searchRowDragSortStateTableREL =
        SearchRowDragSortStateTable.prototype.render.call(this);
      const searchEditableStateTableREL = SearchEditableStateTable.prototype.render.call(this);

      return React.cloneElement(
        searchRowDragSortStateTableREL,
        searchRowDragSortStateTableREL.props,
        searchEditableStateTableREL,
      );
    },
    moveRow(...params) {
      // @ts-ignore
      return SearchRowDragSortStateTable.prototype.moveRow.apply(this, params).then(() => {
        // @ts-ignore
        this.setFieldValues();
      });
    },
    fetchData() {
      return SearchEditableStateTable.prototype.fetchData.call(this);
    },
  },
  null,
);

export default SearchEditableTableRowDragSortStateTable;

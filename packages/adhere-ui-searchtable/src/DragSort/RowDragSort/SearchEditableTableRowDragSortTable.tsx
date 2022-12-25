import React from 'react';

import SearchEditableTable from '../../Editable/SearchEditableTable';
import { SearchTableImplement } from '../../SearchTableImplement';
import { SearchTableImplementProps, SearchTableImplementState } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortStateTable from './SearchRowDragSortStateTable';
import SearchRowDragSortTable from './SearchRowDragSortTable';

const SearchEditableTableRowDragSortTable = RowDragSortMultiExtend<
  SearchTableImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableImplement,
  [SearchEditableTable, SearchRowDragSortTable],
  null,
  {
    render() {
      const searchRowDragSortTableREL = SearchRowDragSortTable.prototype.render.call(this);
      const searchEditableTableREL = SearchEditableTable.prototype.render.call(this);

      return React.cloneElement(
        searchRowDragSortTableREL,
        searchRowDragSortTableREL.props,
        searchEditableTableREL,
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
      return SearchEditableTable.prototype.fetchData.call(this);
    },
  },
);

export default SearchEditableTableRowDragSortTable;

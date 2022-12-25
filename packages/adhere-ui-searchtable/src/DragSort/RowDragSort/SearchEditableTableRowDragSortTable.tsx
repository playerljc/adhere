import React from 'react';

import SearchEditableTable from '../../Editable/SearchEditableTable';
import { SearchTableImplement } from '../../SearchTableImplement';
import { SearchTableImplementProps, SearchTableImplementState } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
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
    onDragSortRow(params) {
      // 如果是行编辑状态则不能拖拽和放置
      // @ts-ignore
      if (this.state.isTableEditor) {
        return {
          dragConfig: {
            canDrag: () => false,
          },
          dropConfig: {
            canDrop: () => false,
          },
        };
      }

      return SearchRowDragSortTable.prototype.onDragSortRow.call(this, params);
    },
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
      return SearchRowDragSortTable.prototype.moveRow.apply(this, params).then(() => {
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

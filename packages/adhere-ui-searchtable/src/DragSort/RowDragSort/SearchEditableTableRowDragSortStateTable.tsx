import React from 'react';

import SearchEditableStateTable from '../../Editable/SearchEditableStateTable';
import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import type { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
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

      return SearchRowDragSortStateTable.prototype.onDragSortRow.call(this, params);
    },
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

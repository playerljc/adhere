import React from 'react';

import SearchEditableCellTable from '../../Editable/SearchEditableCellTable';
import { SearchTableImplement } from '../../SearchTableImplement';
import type { SearchTableImplementProps, SearchTableImplementState } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortStateTable from './SearchRowDragSortStateTable';
import SearchRowDragSortTable from './SearchRowDragSortTable';

const SearchEditableCellRowDragSortTable = RowDragSortMultiExtend<
  SearchTableImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableImplement,
  [SearchEditableCellTable, SearchRowDragSortTable],
  SearchRowDragSortTable,
  {
    onDragSortRow(params) {
      // 如果是行编辑状态则不能拖拽和放置
      // @ts-ignore
      if (this.state.activeValue) {
        return {
          dragConfig: {
            canDrag: () => {
              return false;
            },
          },
          dropConfig: {
            canDrop: () => {
              return false;
            },
          },
        };
      }

      return SearchRowDragSortStateTable.prototype.onDragSortRow.call(this, params);
    },
  },
);

export default SearchEditableCellRowDragSortTable;

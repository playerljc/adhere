import React from 'react';

import SearchEditableCellStateTable from '../../Editable/SearchEditableCellStateTable';
import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import type { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
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

export default SearchEditableCellRowDragSortStateTable;

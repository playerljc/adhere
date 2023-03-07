import React from 'react';

import SearchEditableRowStateTable from '../../Editable/SearchEditableRowStateTable';
import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import type { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
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
  {
    onDragSortRow(params) {
      // 如果是行编辑状态则不能拖拽和放置
      // @ts-ignore
      if (this.state.editorRowId) {
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
  },
);

export default SearchEditableRowDragSortStateTable;

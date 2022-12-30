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

      return SearchRowDragSortTable.prototype.onDragSortRow.call(this, params);
    },
  },
);

export default SearchEditableRowDragSortTable;

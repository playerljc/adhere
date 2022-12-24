// import cloneDeep from 'lodash.clonedeep';
import React from 'react';

import SearchEditableCellStateTable from '../../Editable/SearchEditableCellStateTable';
import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
import RowDragSortMultiExtend from './RowDragSortMultiExtend';
import SearchRowDragSortStateTable from './SearchRowDragSortStateTable';

// class SearchEditableCellRowDragSortStateTable extends SearchTableStateImplement<
//   SearchTableStateImplementProps,
//   SearchTableImplementState
// > {
//   constructor(props) {
//     super(props);
//
//     // @ts-ignore
//     SearchEditableCellStateTable.call(this, props);
//     const searchEditableCellStateTableSuper = cloneDeep(this);
//
//     // @ts-ignore
//     SearchRowDragSortStateTable.call(this, props);
//     const searchRowDragSortStateTableSuper = cloneDeep(this);
//
//     this.cellConfigReducers = [
//       ...searchEditableCellStateTableSuper.cellConfigReducers,
//       ...searchRowDragSortStateTableSuper.cellConfigReducers,
//     ];
//     this.rowConfigReducers = [
//       ...searchEditableCellStateTableSuper.rowConfigReducers,
//       ...searchRowDragSortStateTableSuper.rowConfigReducers,
//     ];
//   }
// }
//
// SearchEditableCellRowDragSortStateTable.prototype.onTableRowComponentReducers = function (columns) {
//   const res = new Set([
//     ...SearchEditableCellStateTable.prototype.onTableRowComponentReducers.call(this, columns),
//     ...SearchRowDragSortStateTable.prototype.onTableRowComponentReducers.call(this, columns),
//   ]);
//
//   return [...Array.from(res)];
// };
//
// SearchEditableCellRowDragSortStateTable.prototype.onTableCellComponentReducers = function (
//   columns,
// ) {
//   const res = new Set([
//     ...SearchEditableCellStateTable.prototype.onTableCellComponentReducers.call(this, columns),
//     ...SearchRowDragSortStateTable.prototype.onTableCellComponentReducers.call(this, columns),
//   ]);
//
//   return [...Array.from(res)];
// };
//
// SearchEditableCellRowDragSortStateTable.prototype.render = function () {
//   return SearchRowDragSortStateTable.prototype.render.call(this);
// };
//
// for (const p in SearchEditableCellStateTable.prototype) {
//   if (!(p in SearchEditableCellRowDragSortStateTable.prototype)) {
//     SearchEditableCellRowDragSortStateTable.prototype[p] =
//       SearchEditableCellStateTable.prototype[p];
//   }
// }
//
// for (const p in SearchRowDragSortStateTable.prototype) {
//   if (!(p in SearchEditableCellRowDragSortStateTable.prototype)) {
//     SearchEditableCellRowDragSortStateTable.prototype[p] = SearchRowDragSortStateTable.prototype[p];
//   }
// }

const SearchEditableCellRowDragSortStateTable = RowDragSortMultiExtend<
  SearchTableStateImplementProps,
  SearchTableImplementState
>(
  // @ts-ignore
  SearchTableStateImplement,
  [SearchEditableCellStateTable, SearchRowDragSortStateTable],
  SearchRowDragSortStateTable,
);

export default SearchEditableCellRowDragSortStateTable;

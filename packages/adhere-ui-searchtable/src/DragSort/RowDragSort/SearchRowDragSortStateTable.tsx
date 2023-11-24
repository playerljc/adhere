// import { arrayMoveImmutable } from 'array-move';
import cloneDeep from 'lodash.clonedeep';

import { SearchTableStateImplement } from '../../SearchTableStateImplement';
import { findRecord, swap } from '../../Util';
import type { SearchTableImplementState, SearchTableStateImplementProps } from '../../types';
import SearchRowDragSortFactory from './SearchRowDragSortFactory';

/**
 * SearchRowDragSortStateTable
 * @class
 */
class SearchRowDragSortStateTable extends SearchRowDragSortFactory<
  SearchTableStateImplementProps,
  SearchTableImplementState
>(SearchTableStateImplement) {
  /**
   * moveRow
   * @param {any} dragRecord
   * @param {any} hoverRecord
   * @return Promise<void>
   */
  moveRow(dragRecord: any, hoverRecord: any): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.state[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];

      const rowKey = this.getRowKey();
      const _dragRecord = findRecord(dataSource, rowKey, dragRecord[rowKey]);
      const _hoverRecord = findRecord(dataSource, rowKey, hoverRecord[rowKey]);

      swap(_dragRecord, _hoverRecord);

      listData[this.getFetchListPropName()][this.getDataKey()] = [...dataSource];
      /*arrayMoveImmutable(
        dataSource,
        dragIndex,
        hoverIndex,
      );*/

      this.setState(
        {
          [this.getServiceName()]: listData,
        },
        () => {
          resolve();
        },
      );
    });
  }
}

export default SearchRowDragSortStateTable;

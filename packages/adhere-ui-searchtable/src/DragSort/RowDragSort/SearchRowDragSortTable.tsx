import { SearchTableImplement } from '../../SearchTableImplement';
import { cloneDeep } from '../../Util';
import { findRecord, swap } from '../../Util';
import type { SearchTableImplementProps, SearchTableImplementState } from '../../types';
import SearchRowDragSortFactory from './SearchRowDragSortFactory';

/**
 * SearchRowDragSortTable
 * @class
 */
class SearchRowDragSortTable extends SearchRowDragSortFactory<
  SearchTableImplementProps,
  SearchTableImplementState
>(SearchTableImplement) {
  /**
   * moveRow
   * @param {any} dragRecord
   * @param {any} hoverRecord
   * @return Promise<void>
   */
  moveRow(dragRecord: any, hoverRecord: any): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.props[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];

      const rowKey = this.getRowKey();
      const _dragRecord = findRecord(dataSource, rowKey, dragRecord[rowKey]);
      const _hoverRecord = findRecord(dataSource, rowKey, hoverRecord[rowKey]);

      swap(_dragRecord, _hoverRecord);

      listData[this.getFetchListPropName()][this.getDataKey()] = [
        ...dataSource,
      ]; /*arrayMoveImmutable(
        dataSource,
        dragIndex,
        hoverIndex,
      );*/

      this.props
        .dispatch({
          type: `${this.getServiceName()}/receive`,
          ...listData,
        })
        .then(() => resolve());
    });
  }
}

export default SearchRowDragSortTable;

import { SearchTableImplement } from '../../SearchTableImplement';
import { cloneDeep } from '../../Util';
import { findRecord, moveSort, swap } from '../../Util';
import type {
  RowDragSortType,
  SearchTableImplementProps,
  SearchTableImplementState,
} from '../../types';
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
   * @param {RowDragSortType} dragSortType - 'swap' | 'sort'，默认从 getDragSortType() 读取
   * @return Promise<void>
   */
  moveRow(
    dragRecord: any,
    hoverRecord: any,
    dragSortType: RowDragSortType = this.getDragSortType(),
  ): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.props[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];

      const rowKey = this.getRowKey();

      if (dragSortType === 'sort') {
        moveSort(dataSource, rowKey, dragRecord[rowKey], hoverRecord[rowKey]);
      } else {
        const _dragRecord = findRecord(dataSource, rowKey, dragRecord[rowKey]);
        const _hoverRecord = findRecord(dataSource, rowKey, hoverRecord[rowKey]);

        swap(_dragRecord, _hoverRecord);
      }

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

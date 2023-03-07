import { arrayMoveImmutable } from 'array-move';
import cloneDeep from 'lodash.clonedeep';

import { SearchTableImplement } from '../../SearchTableImplement';
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
   * @param dragIndex
   * @param hoverIndex
   * @return Promise<void>
   */
  moveRow(dragIndex: number, hoverIndex: number): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.props[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      listData[this.getFetchListPropName()][this.getDataKey()] = arrayMoveImmutable(
        dataSource,
        dragIndex,
        hoverIndex,
      );

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

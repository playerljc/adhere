import { arrayMoveImmutable } from 'array-move';
import cloneDeep from 'lodash.clonedeep';

import { SearchTableStateImplement } from '../../SearchTableStateImplement';
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
   * @param dragIndex
   * @param hoverIndex
   * @return Promise<void>
   */
  moveRow(dragIndex: number, hoverIndex: number): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.state[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      listData[this.getFetchListPropName()][this.getDataKey()] = arrayMoveImmutable(
        dataSource,
        dragIndex,
        hoverIndex,
      );

      this.setState(
        {
          [this.getServiceName()]: listData,
        },
        () => resolve(),
      );
    });
  }
}

export default SearchRowDragSortStateTable;

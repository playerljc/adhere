import dayjs from 'dayjs';
import cloneDeep from 'lodash.clonedeep';

import type { SearchEditorTableState, SearchTableStateImplementProps } from '../types';
import { findRecord } from '../util';
import SearchEditableCellStateTable from './SearchEditableCellStateTable';
import SearchEditableFactory from './SearchEditableFactory';

/**
 * SearchEditableStateTable
 * @class
 * @classdesc 可编辑的表格(表格进行整体编辑)
 */
class SearchEditableStateTable extends SearchEditableFactory<
  SearchTableStateImplementProps,
  SearchEditorTableState
>(SearchEditableCellStateTable) {
  /**
   * updateEditorData
   * @description 更新可编辑的所有单元格
   * @return Promise<void>
   */
  updateEditorData(changeData: { [props: string]: any }[]): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.state[this.getServiceName()]);
      // 所有的数据
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      const rowKey = this.getRowKey();

      changeData.forEach((record) => {
        const keys = Object.keys(record);

        keys.forEach((dataIndex) => {
          let value = record[dataIndex];
          if (value instanceof dayjs) {
            value = value.valueOf();
          }

          const recordItem = findRecord(dataSource, rowKey, record[rowKey]);
          if (recordItem) {
            recordItem[dataIndex] = value;
          }
        });
      });

      this.setState(
        {
          [this.getServiceName()]: listData,
        },
        () => resolve(),
      );
    });
  }
}

export default SearchEditableStateTable;

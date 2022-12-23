import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';

import SearchEditorCellStateTable from './SearchEditorCellStateTable';
import SearchEditorFactory from './SearchEditorFactory';
import { SearchEditorTableState, SearchTableStateImplementProps } from './types';

/**
 * SearchEditorStateTable
 * @class
 * @classdesc 可编辑的表格(表格进行整体编辑)
 */
class SearchEditorStateTable extends SearchEditorFactory<
  SearchTableStateImplementProps,
  SearchEditorTableState
>(SearchEditorCellStateTable) {
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
          if (value instanceof moment) {
            value = value.valueOf();
          }

          const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
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

export default SearchEditorStateTable;

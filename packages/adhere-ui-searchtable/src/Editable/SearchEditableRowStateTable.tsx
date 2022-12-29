import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';

import { SearchEditorRowTableState, SearchTableStateImplementProps } from '../types';
import SearchEditableCellStateTable from './SearchEditableCellStateTable';
import SearchEditableRowFactory from './SearchEditableRowFactory';

/**
 * SearchEditableRowTable
 * @class
 * @classdesc 行可编辑的表格
 */
class SearchEditableRowStateTable extends SearchEditableRowFactory<
  SearchTableStateImplementProps,
  SearchEditorRowTableState
>(SearchEditableCellStateTable) {
  /**
   * updateEditableCellRowData
   * @description 更新可编辑单元格一行的数据
   * @param values 一行的数据
   * @param record
   * @return Promise<void>
   */
  updateEditorCellRowData({
    values,
    record,
  }: {
    values: { [props: string]: any };
    record: { [props: string]: any };
  }): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.state[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      const rowKey = this.getRowKey();
      const keys = Object.keys(values);

      keys.forEach((dataIndex) => {
        let value = values[dataIndex];
        if (value instanceof moment) {
          value = value.valueOf();
        }

        const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
        if (recordItem) {
          recordItem[dataIndex] = value;
        }
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

export default SearchEditableRowStateTable;
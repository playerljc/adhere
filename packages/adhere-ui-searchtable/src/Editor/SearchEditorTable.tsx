import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';

import { SearchEditorTableState, SearchTableImplementProps } from '../types';
import SearchEditorCellTable from './SearchEditorCellTable';
import SearchEditorFactory from './SearchEditorFactory';

/**
 * SearchEditorTable
 * @class
 * @classdesc 可编辑的表格(表格进行整体编辑)
 */
class SearchEditorTable<
  P extends SearchTableImplementProps,
  S extends SearchEditorTableState,
> extends SearchEditorFactory<SearchTableImplementProps, SearchEditorTableState>(
  SearchEditorCellTable,
) {
  /**
   * updateEditorData
   * @description 更新可编辑的所有单元格
   * @return Promise<void>
   */
  updateEditorData(changeData: { [props: string]: any }[]): Promise<void> {
    return new Promise((resolve) => {
      const listData = cloneDeep(this.props[this.getServiceName()]);
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

      this.props
        .dispatch({
          type: `${this.getServiceName()}/receive`,
          [this.getServiceName()]: listData,
        })
        .then(() => resolve());
    });
  }
}

export default SearchEditorTable;

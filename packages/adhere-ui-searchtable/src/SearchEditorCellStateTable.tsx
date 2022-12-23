import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';

import SearchEditorCellFactory from './SearchEditorCellFactory';
import { SearchTableStateImplement } from './SearchTableStateImplement';
import { SearchTableImplementState, SearchTableStateImplementProps } from './types';

/**
 * SearchEditorCellStateTable
 * @class
 * @classdesc 可编辑单元格的表格
 */
class SearchEditorCellStateTable<
  P extends SearchTableStateImplementProps,
  S extends SearchTableImplementState,
> extends SearchEditorCellFactory<SearchTableStateImplementProps, SearchTableImplementState>(
  SearchTableStateImplement,
) {
  /**
   * updateEditorCellDate
   * @description 更新可编辑单元格的数据
   * @param record 行数据
   * @param dataIndex 列索引
   * @param value 更新的值
   * @return Promise<void>
   */
  updateEditorCellDate({
    record,
    dataIndex,
    value,
  }: {
    record: { [props: string]: any };
    dataIndex: string;
    value: any;
  }): Promise<void> {
    return new Promise((resolve) => {
      if (record[dataIndex] === value) {
        resolve();
        return;
      }

      const listData = cloneDeep(this.state[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      const rowKey = this.getRowKey();

      const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
      if (recordItem) {
        recordItem[dataIndex] = value;

        this.setState(
          {
            [this.getServiceName()]: listData,
          },
          () => resolve(),
        );
      } else resolve();
    });
  }

  /**
   * updateEditorCellDateData
   * @description 更新日期类型可编辑单元格的数据
   * @param record
   * @param dataIndex
   * @param value
   * @return Promise<void>
   */
  updateEditorCellDateData({
    record,
    dataIndex,
    value,
  }: {
    record: { [props: string]: any };
    dataIndex: string;
    value: moment.Moment | null;
  }): Promise<void> {
    return new Promise((resolve) => {
      if (record[dataIndex] === value?.valueOf()) {
        resolve();
        return;
      }

      const listData = cloneDeep(this.state[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      const rowKey = this.getRowKey();

      const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
      if (recordItem) {
        recordItem[dataIndex] = value?.valueOf();

        this.setState(
          {
            [this.getServiceName()]: listData,
          },
          () => resolve(),
        );
      } else resolve();
    });
  }
}

export default SearchEditorCellStateTable;

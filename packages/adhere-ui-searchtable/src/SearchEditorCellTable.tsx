import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';

import SearchEditorCellFactory from './SearchEditorCellFactory';
import { SearchTableImplement } from './SearchTableImplement';
import { SearchTableImplementProps, SearchTableImplementState } from './types';

/**
 * SearchEditorCellTable
 * @class
 * @classdesc 可编辑单元格的表格
 */
class SearchEditorCellTable<
  P extends SearchTableImplementProps,
  S extends SearchTableImplementState
> extends SearchEditorCellFactory(SearchTableImplement<SearchTableImplementProps, SearchTableImplementState>) {
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

      const listData = cloneDeep(this.props[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      const rowKey = this.getRowKey();

      const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
      if (recordItem) {
        recordItem[dataIndex] = value;

        this.props
          .dispatch({
            type: `${this.getServiceName()}/receive`,
            [this.getServiceName()]: listData,
          })
          .then(() => resolve());
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

      const listData = cloneDeep(this.props[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      const rowKey = this.getRowKey();

      const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
      if (recordItem) {
        recordItem[dataIndex] = value?.valueOf();

        this.props
          .dispatch({
            type: `${this.getServiceName()}/receive`,
            [this.getServiceName()]: listData,
          })
          .then(() => resolve());
      } else resolve();
    });
  }
}

export default SearchEditorCellTable;

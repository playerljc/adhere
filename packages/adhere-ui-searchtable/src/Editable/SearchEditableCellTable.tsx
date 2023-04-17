import type dayjs from 'dayjs';
import cloneDeep from 'lodash.clonedeep';

import { SearchTableImplement } from '../SearchTableImplement';
import type { SearchTableImplementProps, SearchTableImplementState } from '../types';
import { findRecord } from '../util';
import SearchEditableCellFactory from './SearchEditableCellFactory';

/**
 * SearchEditableCellTable
 * @class
 * @classdesc 可编辑单元格的表格
 */
class SearchEditableCellTable<
  P extends SearchTableImplementProps,
  S extends SearchTableImplementState,
> extends SearchEditableCellFactory<SearchTableImplementProps, SearchTableImplementState>(
  SearchTableImplement,
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

      const listData = cloneDeep(this.props[this.getServiceName()]);
      const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
      const rowKey = this.getRowKey();

      const recordItem = findRecord(dataSource, rowKey, record[rowKey]);
      if (recordItem) {
        recordItem[dataIndex] = value;

        this.props
          .dispatch({
            type: `${this.getServiceName()}/receive`,
            // [this.getServiceName()]: listData,
            ...listData,
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
    value: dayjs.Dayjs | null;
  }): Promise<void> {
    return this.updateEditorCellDate({ record, dataIndex, value: value?.valueOf() });
    // return new Promise((resolve) => {
    //   if (record[dataIndex] === value?.valueOf()) {
    //     resolve();
    //     return;
    //   }
    //
    //   const listData = cloneDeep(this.props[this.getServiceName()]);
    //   const dataSource = listData[this.getFetchListPropName()][this.getDataKey()] || [];
    //   const rowKey = this.getRowKey();
    //
    //   const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
    //   if (recordItem) {
    //     recordItem[dataIndex] = value?.valueOf();
    //
    //     this.props
    //       .dispatch({
    //         type: `${this.getServiceName()}/receive`,
    //         // [this.getServiceName()]: listData,
    //         ...listData,
    //       })
    //       .then(() => resolve());
    //   } else resolve();
    // });
  }
}

export default SearchEditableCellTable;

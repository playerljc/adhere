import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';
import React from 'react';

import { SearchTableImplement } from './SearchTableImplement';
import {
  ColumnEditableConfig,
  ColumnTypeExt,
  FormItemType,
  RowEditableConfig,
  SearchTableImplementProps,
  SearchTableImplementState,
} from './types';

/**
 * SearchEditorCellTable
 * @class
 * @classdesc 可编辑单元格的表格
 */
class SearchEditorCellTable<
  P extends SearchTableImplementProps,
  S extends SearchTableImplementState,
> extends SearchTableImplement<SearchTableImplementProps, SearchTableImplementState> {
  /**
   * valueToFormItemValueMap
   * @description 值和表单控件值之间的转换，现在只涉及到时间控件
   */
  valueToFormItemValueMap = new Map<
    string,
    (params: { record: { [prop: string]: any }; dataIndex: string }) => any
  >([
    [
      'rangePicker',
      ({ record, dataIndex }) => {
        let value = record?.[dataIndex as string];
        return Array.isArray(value) && value.length === 2
          ? [moment(value[0]), moment(value[1])]
          : [moment(), moment()];
      },
    ],
    [
      'datePicker',
      ({ record, dataIndex }) => {
        let value = record?.[dataIndex as string];
        return moment(value);
      },
    ],
    [
      'timePicker',
      ({ record, dataIndex }) => {
        let value = record?.[dataIndex as string];
        return moment(value);
      },
    ],
  ]);

  constructor(props) {
    super(props);

    this.cellConfigReducers = [...this.cellConfigReducers, this.cellEditableReducer];
  }

  onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
    const existsEditor = columns.some(
      (column) => '$editable' in column && column.$editable?.editable,
    );

    if (existsEditor) {
      return [...this.tableRowComponentReducers, 'useEditableRow'];
    }

    return this.tableRowComponentReducers;
  }

  onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
    const existsEditor = columns.some(
      (column) => '$editable' in column && column.$editable?.editable,
    );

    if (existsEditor) {
      return [...this.tableCellComponentReducers, 'useEditableCell'];
    }

    return this.tableCellComponentReducers;
  }

  /**
   * valueToFormItemValue
   * @description 值和表单值的转换
   */
  valueToFormItemValue({
    type,
    record,
    dataIndex,
  }: {
    type: FormItemType;
    record: { [prop: string]: any };
    dataIndex: string;
  }) {
    const item = this.valueToFormItemValueMap.get(type as string);

    return item ? item?.({ record, dataIndex }) : record?.[dataIndex as string];
  }

  onEditorRow(params: {
    columns: ColumnTypeExt[];
    rowIndex: number;
    record: any;
  }): RowEditableConfig {
    return {
      editable: false,
    };
  }

  onEditorCell(params: { rowIndex: number; editorConfig: ColumnEditableConfig; record: any }) {}

  /**
   * cellEditableReducer
   * @description 可编辑单元格的onCell处理
   * @param params
   */
  cellEditableReducer(params: {
    rowIndex: number;
    column: ColumnTypeExt;
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
  }): ColumnTypeExt {
    const { rowIndex, column, record } = params;

    // 如果设置了$editable则调用onEditorCell方法对每个cell进行props注入
    if ('$editable' in column && column.$editable?.editable && this.onEditorCell) {
      this.onEditorCell({
        rowIndex,
        editorConfig: column.$editable,
        record: { ...record },
      });

      return column;
    }

    return column;
  }

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

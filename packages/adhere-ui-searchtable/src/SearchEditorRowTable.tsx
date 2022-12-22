import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';
import React from 'react';

import SearchEditorCellTable from './SearchEditorCellTable';
import {
  ColumnTypeExt,
  RowConfig,
  RowEditableConfig,
  SearchEditorRowTableState,
  SearchTableImplementProps,
} from './types';

/**
 * SearchEditorRowTable
 * @class
 * @classdesc 行可编辑的表格
 */
class SearchEditorRowTable<
  P extends SearchTableImplementProps,
  S extends SearchEditorRowTableState,
> extends SearchEditorCellTable<SearchTableImplementProps, SearchEditorRowTableState> {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      editorRowId: '',
    };

    this.rowConfigReducers = [...this.rowConfigReducers, this.rowEditableReducer];
  }

  /**
   * updateEditorCellRowData
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
      const listData = cloneDeep(this.props[this.getServiceName()]);
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

      this.props
        .dispatch({
          type: `${this.getServiceName()}/receive`,
          [this.getServiceName()]: listData,
        })
        .then(() => resolve());
    });
  }

  /**
   * rowEditableReducer
   * @description 可编辑row的处理
   * @param params
   */
  rowEditableReducer(params: {
    rowIndex: number;
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
    rowConfig: RowConfig;
  }): RowConfig {
    const { rowConfig, rowIndex, columns, record } = params;

    if (this.onEditorRow) {
      rowConfig.$editable = this.onEditorRow({
        rowIndex,
        record,
        columns,
      });
    }

    return rowConfig;
  }

  /**
   * onEditorRow
   * @param params
   */
  onEditorRow(params: {
    columns: ColumnTypeExt[];
    rowIndex: number;
    record: any;
  }): RowEditableConfig {
    return {
      editable: true,
    };
  }

  /**
   * onEditorCell
   * @param record
   * @param editorConfig
   */
  onEditorCell({ record, editorConfig }) {
    if (editorConfig) {
      editorConfig.useTrigger = false;

      if (record[this.getRowKey()] === this.state.editorRowId) {
        editorConfig.defaultStatus = 'edit';
      }
    }
  }

  /**
   * fetchData
   */
  fetchData() {
    return super.fetchData().then((res) => {
      this.setState({
        editorRowId: '',
      });

      return res;
    });
  }
}

export default SearchEditorRowTable;

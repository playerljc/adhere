import { Form } from 'antd';
import { FormInstance } from 'antd/es/form';
import cloneDeep from 'lodash.clonedeep';
import moment from 'moment';
import { TableComponents } from 'rc-table/lib/interface';
import React, { ReactElement, createRef } from 'react';

import EditableTableCell from './Extension/EditableCell/EditableTableCell';
import EditableTableRow from './Extension/EditableCell/EditableTableRow';
import SearchEditorCellStateTable from './SearchEditorCellStateTable';
import { SearchTableContext, selectorPrefix } from './SearchTable';
import {
  ColumnTypeExt,
  RowConfig,
  RowEditableConfig,
  SearchEditorTableState,
  SearchTableStateImplementProps,
} from './types';

/**
 * SearchEditorStateTable
 * @class
 * @classdesc 可编辑的表格(表格进行整体编辑)
 */
class SearchEditorStateTable extends SearchEditorCellStateTable<
  SearchTableStateImplementProps,
  SearchEditorTableState
> {
  private formRef = createRef<FormInstance<any> | null>();

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      isTableEditor: false,
    };

    this.rowReducers = [...this.rowReducers, this.rowEditableReducer];
  }

  /**
   * onComponents
   * @param columns
   * @param components
   */
  onComponents(columns: ColumnTypeExt[], components: TableComponents<any>): TableComponents<any> {
    const existsEditor = columns.some(
      (column) => '$editable' in column && column.$editable?.editable,
    );

    if (existsEditor) {
      components.body = {
        row: EditableTableRow,
        cell: EditableTableCell,
      };
    }

    return components;
  }

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

      if (this.state.isTableEditor) {
        editorConfig.defaultStatus = 'edit';
      }
    }
  }

  /**
   * fetchData
   */
  fetchData() {
    return super.fetchData().then((res) => {
      const dataSource = this.getData();
      const columns = this.getTableColumns();

      this.formRef?.current?.setFieldValue?.(
        'dataSource',
        (dataSource || []).map((_record) =>
          (columns || []).reduce(
            (_r, { dataIndex, $editable }) => {
              if (dataIndex in _record && $editable && 'type' in $editable) {
                _r[dataIndex] = this.valueToFormItemValue({
                  type: $editable.type,
                  record: _record,
                  dataIndex,
                });
              }
              return _r;
            },
            { [this.getRowKey()]: _record[this.getRowKey()] },
          ),
        ),
      );

      this.setState({
        isTableEditor: false,
      });

      return res;
    });
  }

  /**
   * render
   * @protected
   */
  render(): ReactElement {
    return (
      <div className={`${selectorPrefix}-wrap`}>
        <Form
          // @ts-ignore
          ref={this.formRef}
          className={`${selectorPrefix}-form`}
          component={false}
        >
          <Form.List name="dataSource">
            {(fields, operation, meta) => (
              <SearchTableContext.Provider
                value={{
                  context: this,
                  // @ts-ignore
                  form: this.formRef?.current,
                  formList: {
                    fields,
                    operation,
                    meta,
                  },
                }}
              >
                {this.renderChildren()}
              </SearchTableContext.Provider>
            )}
          </Form.List>
        </Form>
      </div>
    );
  }
}

export default SearchEditorStateTable;

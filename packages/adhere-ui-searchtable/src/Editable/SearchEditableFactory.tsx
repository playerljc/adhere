import { Form } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { ReactElement } from 'react';
import React, { createRef } from 'react';

import { SearchTableContext, selectorPrefix } from '../SearchTable';
import { findRecord } from '../Util';
import type { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';

export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    formRef = createRef<FormInstance<any> | null>();

    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        isTableEditor: false,
      };

      this.rowConfigReducers = [...this.rowConfigReducers, this.rowEditableReducer];
    }

    onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
      const existsEditor = columns.some(
        (column) => '$editable' in column && column.$editable?.editable,
      );

      if (existsEditor) {
        return [...this.tableRowComponentReducers, 'useEditableTableRow'];
      }

      return this.tableRowComponentReducers;
    }

    onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
      const existsEditor = columns.some(
        (column) => '$editable' in column && column.$editable?.editable,
      );

      if (existsEditor) {
        return [...this.tableCellComponentReducers, 'useEditableTableCell'];
      }

      return this.tableCellComponentReducers;
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
     * onExpandedRowsChange
     * @param expandedRows
     */
    onExpandedRowsChange(expandedRows) {
      return super.onExpandedRowsChange(expandedRows).then(() => {
        if (this.state.isTableEditor) {
          this.setFieldValues(this.getData());
        }
      });
    }

    /**
     * setFieldValues
     */
    setFieldValues(dataSource) {
      // const dataSource = this.getData();
      const columns = this.getTableColumns();

      let fields: any = [];

      const createFields = (_record) =>
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
        );

      const { expandedRowKeys } = this.state;
      const rowKey = this.getRowKey();

      if (!!expandedRowKeys.length) {
        const displayEls = this.tableWrapRef?.current?.querySelectorAll?.(
          '.ant-table-wrapper tr[data-row-key]',
        );

        fields = Array.from<HTMLElement>(displayEls).map((el) => {
          const id = el.dataset['rowKey'];
          const _record = findRecord(dataSource, rowKey, id);
          return createFields(_record);
        });
      } else {
        fields = dataSource.map((_record) => createFields(_record));
      }

      this.formRef?.current?.setFieldValue?.('dataSource', fields);
    }

    /**
     * fetchData
     */
    fetchData() {
      return super.fetchData().then((res) => {
        this.setFieldValues(res.data[this.getDataKey()]);

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
              {(fields, operation, meta) => {
                return (
                  <SearchTableContext.Provider
                    value={{
                      // @ts-ignore
                      context: this,
                      editable: {
                        tableEditable: {
                          // @ts-ignore
                          form: this.formRef?.current,
                          formList: {
                            fields,
                            operation,
                            meta,
                          },
                        },
                      },
                    }}
                  >
                    {this.renderChildren()}
                  </SearchTableContext.Provider>
                );
              }}
            </Form.List>
          </Form>
        </div>
      );
    }
  };
}

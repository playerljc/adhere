import { Form } from 'antd';
import { FormInstance } from 'antd/es/form';
import React, { ReactElement, createRef } from 'react';

import { SearchTableContext, selectorPrefix } from '../SearchTable';
import { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';

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
     * setFieldValues
     */
    setFieldValues() {
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
    }

    /**
     * fetchData
     */
    fetchData() {
      return super.fetchData().then((res) => {
        this.setFieldValues();

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

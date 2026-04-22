import type { FormInstance } from 'antd/es/form';

import type { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';

export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        editorRowId: '',
      };

      this.rowConfigReducers = [...this.rowConfigReducers, this.rowEditableReducer];
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
        } else {
          // editorConfig 是列级别配置对象，渲染不同 row 时会复用同一引用
          // 必须显式设置回 view，否则会导致点击一行后全表进入 edit
          editorConfig.defaultStatus = 'view';
        }
      }
    }

    /**
     * 激活（进入编辑态）指定行
     * @param rowId
     */
    setActiveEditorRowId(rowId: any): Promise<void> {
      return new Promise((resolve) => {
        // @ts-ignore
        this.setState(
          {
            editorRowId: rowId ?? '',
          },
          () => resolve(),
        );
      });
    }

    /**
     * 校验当前激活行（editorRowId 对应的那一行）
     * @param opt antd Form.validateFields 的参数
     */
    validateActiveEditorRow(
      opt?: Parameters<FormInstance['validateFields']>[0],
    ): Promise<any> | undefined {
      // @ts-ignore
      const activeId = this.state?.editorRowId;
      if (!activeId) return undefined;

      const rowIndex = this.getRowIndexById(activeId);
      if (rowIndex < 0) return undefined;

      return this.editableRowForms.get(rowIndex)?.validateFields(opt);
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
  };
}

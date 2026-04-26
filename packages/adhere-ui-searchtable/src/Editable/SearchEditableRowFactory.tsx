import type { FormInstance } from 'antd/es/form';

import type { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';

export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        editorRowIds: [],
      };

      this.rowConfigReducers = [...this.rowConfigReducers, this.rowEditableReducer];
    }

    /**
     * isUseExclusiveEditorRow
     * @description 是否开启互斥单行编辑策略（开启后进入编辑会退出其它编辑行）
     * @return {boolean}
     */
    isUseExclusiveEditorRow(): boolean {
      return false;
    }

    /**
     * rowEditableReducer
     * @description 可编辑row的处理
     * @param params
     * @return {RowConfig}
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

        if ((this.state.editorRowIds ?? []).includes(record[this.getRowKey()])) {
          editorConfig.defaultStatus = 'edit';
        } else {
          // editorConfig 是列级别配置对象，渲染不同 row 时会复用同一引用
          // 必须显式设置回 view，否则会导致点击一行后全表进入 edit
          editorConfig.defaultStatus = 'view';
        }
      }
    }

    /**
     * setActiveEditorRowIds
     * @description 设置当前处于编辑态的行 id 集合（整体替换）
     * @param {string[]} rowIds 行主键值列表，空数组表示无编辑行
     * @return {Promise<void>}
     */
    setActiveEditorRowIds(rowIds: readonly string[]): Promise<void> {
      return new Promise((resolve) => {
        // @ts-ignore
        this.setState(
          {
            editorRowIds: [...rowIds],
          },
          () => resolve(),
        );
      });
    }

    /**
     * validateActiveEditorRow
     * @description 校验指定激活编辑行对应的表单
     * @param {string} rowId 行主键值
     * @param {Parameters<FormInstance['validateFields']>[0]} opt antd Form.validateFields 的参数
     * @return {Promise<any> | undefined}
     */
    validateActiveEditorRow(
      rowId: string,
      opt?: Parameters<FormInstance['validateFields']>[0],
    ): Promise<any> | undefined {
      console.log('validateActiveEditorRow', rowId, this.state?.editorRowIds);
      if (!rowId) return undefined;
      // @ts-ignore
      if (!this.state?.editorRowIds?.includes(rowId)) return undefined;

      const rowIndex = this.getRowIndexById(rowId);

      console.log('validateActiveEditorRow RowIndex', rowIndex);
      if (rowIndex < 0) return undefined;

      console.log(
        'validateActiveEditorRow editableRowForms',
        this.editableRowForms,
        this.editableRowForms.get(rowIndex),
      );

      return this.editableRowForms.get(rowIndex)?.validateFields(opt);
    }

    /**
     * fetchData
     */
    fetchData() {
      return super.fetchData().then((res: any) => {
        this.setState({
          editorRowIds: [],
        });

        return res;
      });
    }
  };
}

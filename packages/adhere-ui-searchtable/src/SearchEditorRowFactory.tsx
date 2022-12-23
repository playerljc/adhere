import { ColumnTypeExt, RowConfig, RowEditableConfig } from './types';

export default (SuperClass) =>
  class extends SuperClass {
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
  };

import SearchEditorCellStateTable from './SearchEditorCellStateTable';
import { ColumnTypeExt, RowConfig, RowEditableConfig, SearchEditorRowTableState, SearchTableStateImplementProps } from './types';
/**
 * SearchEditorRowTable
 * @class
 * @classdesc 行可编辑的表格
 */
declare class SearchEditorRowStateTable extends SearchEditorCellStateTable<SearchTableStateImplementProps, SearchEditorRowTableState> {
    constructor(props: any);
    /**
     * updateEditorCellRowData
     * @description 更新可编辑单元格一行的数据
     * @param values 一行的数据
     * @param record
     * @return Promise<void>
     */
    updateEditorCellRowData({ values, record, }: {
        values: {
            [props: string]: any;
        };
        record: {
            [props: string]: any;
        };
    }): Promise<void>;
    /**
     * rowEditableReducer
     * @description 可编辑row的处理
     * @param params
     */
    rowEditableReducer(params: {
        rowIndex: number;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
        rowConfig: RowConfig;
    }): RowConfig;
    /**
     * onEditorRow
     * @param params
     */
    onEditorRow(params: {
        columns: ColumnTypeExt[];
        rowIndex: number;
        record: any;
    }): RowEditableConfig;
    /**
     * onEditorCell
     * @param record
     * @param editorConfig
     */
    onEditorCell({ record, editorConfig }: {
        record: any;
        editorConfig: any;
    }): void;
    /**
     * fetchData
     */
    fetchData(): Promise<any>;
}
export default SearchEditorRowStateTable;

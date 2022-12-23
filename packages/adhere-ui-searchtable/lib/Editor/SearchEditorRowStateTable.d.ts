declare const SearchEditorRowStateTable_base: {
    new (props: any): {
        [x: string]: any;
        rowEditableReducer(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: import("../types").ColumnTypeExt[];
            rowConfig: import("../types").RowConfig;
        }): import("../types").RowConfig;
        onEditorRow(params: {
            columns: import("../types").ColumnTypeExt[];
            rowIndex: number;
            record: any;
        }): import("../types").RowEditableConfig;
        onEditorCell({ record, editorConfig }: {
            record: any;
            editorConfig: any;
        }): void;
        fetchData(): any;
    };
    [x: string]: any;
};
/**
 * SearchEditorRowTable
 * @class
 * @classdesc 行可编辑的表格
 */
declare class SearchEditorRowStateTable extends SearchEditorRowStateTable_base {
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
}
export default SearchEditorRowStateTable;

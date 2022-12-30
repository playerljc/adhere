declare const SearchEditableRowStateTable_base: {
    new (props: any): {
        [x: string]: any;
        rowEditableReducer(params: {
            rowIndex: number; /**
             * updateEditableCellRowData
             * @description 更新可编辑单元格一行的数据
             * @param values 一行的数据
             * @param record
             * @return Promise<void>
             */
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
 * SearchEditableRowTable
 * @class
 * @classdesc 行可编辑的表格
 */
declare class SearchEditableRowStateTable extends SearchEditableRowStateTable_base {
    /**
     * updateEditableCellRowData
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
export default SearchEditableRowStateTable;

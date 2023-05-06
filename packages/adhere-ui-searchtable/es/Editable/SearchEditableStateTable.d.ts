/// <reference types="react" />
declare const SearchEditableStateTable_base: {
    new (props: any): {
        [x: string]: any;
        formRef: import("react").RefObject<import("antd").FormInstance<any> | null>;
        onTableRowComponentReducers(columns: import("../types").ColumnTypeExt[]): string[];
        onTableCellComponentReducers(columns: import("../types").ColumnTypeExt[]): string[];
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
        onExpandedRowsChange(expandedRows: any): any;
        setFieldValues(dataSource: any): void;
        fetchData(): any;
        render(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    };
    [x: string]: any;
};
/**
 * SearchEditableStateTable
 * @class
 * @classdesc 可编辑的表格(表格进行整体编辑)
 */
declare class SearchEditableStateTable extends SearchEditableStateTable_base {
    /**
     * updateEditorData
     * @description 更新可编辑的所有单元格
     * @return Promise<void>
     */
    updateEditorData(changeData: {
        [props: string]: any;
    }[]): Promise<void>;
}
export default SearchEditableStateTable;

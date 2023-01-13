/// <reference types="react" />
import { SearchEditorTableState, SearchTableImplementProps } from '../types';
declare const SearchEditableTable_base: {
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
        setFieldValues(dataSource: any): void;
        fetchData(): any;
        render(): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
    };
    [x: string]: any;
};
/**
 * SearchEditableTable
 * @class
 * @classdesc 可编辑的表格(表格进行整体编辑)
 */
declare class SearchEditableTable<P extends SearchTableImplementProps, S extends SearchEditorTableState> extends SearchEditableTable_base {
    /**
     * updateEditorData
     * @description 更新可编辑的所有单元格
     * @return Promise<void>
     */
    updateEditorData(changeData: {
        [props: string]: any;
    }[]): Promise<void>;
}
export default SearchEditableTable;

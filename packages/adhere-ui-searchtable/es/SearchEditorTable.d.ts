import { TableComponents } from 'rc-table/lib/interface';
import { ReactElement } from 'react';
import SearchEditorCellTable from './SearchEditorCellTable';
import { ColumnTypeExt, RowConfig, RowEditableConfig, SearchEditorTableState, SearchTableImplementProps } from './types';
/**
 * SearchEditorTable
 * @class
 * @classdesc 可编辑的表格(表格进行整体编辑)
 */
declare class SearchEditorTable<P extends SearchTableImplementProps, S extends SearchEditorTableState> extends SearchEditorCellTable<SearchTableImplementProps, SearchEditorTableState> {
    private formRef;
    constructor(props: any);
    /**
     * onComponents
     * @param columns
     * @param components
     */
    onComponents(columns: ColumnTypeExt[], components: TableComponents<any>): TableComponents<any>;
    /**
     * updateEditorData
     * @description 更新可编辑的所有单元格
     * @return Promise<void>
     */
    updateEditorData(changeData: {
        [props: string]: any;
    }[]): Promise<void>;
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
    /**
     * render
     * @protected
     */
    render(): ReactElement;
}
export default SearchEditorTable;

import moment from 'moment';
import { SearchTableStateImplement } from './SearchTableStateImplement';
import { ColumnEditableConfig, ColumnTypeExt, FormItemType, RowEditableConfig, SearchTableImplementState, SearchTableStateImplementProps } from './types';
/**
 * SearchEditorCellStateTable
 * @class
 * @classdesc 可编辑单元格的表格
 */
declare class SearchEditorCellStateTable<P extends SearchTableStateImplementProps, S extends SearchTableImplementState> extends SearchTableStateImplement<SearchTableStateImplementProps, SearchTableImplementState> {
    /**
     * valueToFormItemValueMap
     * @description 值和表单控件值之间的转换，现在只涉及到时间控件
     */
    valueToFormItemValueMap: Map<string, (params: {
        record: {
            [prop: string]: any;
        };
        dataIndex: string;
    }) => any>;
    constructor(props: any);
    onTableRowComponentReducers(columns: ColumnTypeExt[]): string[];
    onTableCellComponentReducers(columns: ColumnTypeExt[]): string[];
    onEditorRow(params: {
        columns: ColumnTypeExt[];
        rowIndex: number;
        record: any;
    }): RowEditableConfig;
    onEditorCell(params: {
        rowIndex: number;
        editorConfig: ColumnEditableConfig;
        record: any;
    }): void;
    /**
     * cellEditableReducer
     * @description 可编辑单元格的onCell处理
     * @param params
     */
    cellEditableReducer(params: {
        rowIndex: number;
        column: ColumnTypeExt;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
    }): ColumnTypeExt;
    /**
     * valueToFormItemValue
     * @description 值和表单值的转换
     */
    valueToFormItemValue({ type, record, dataIndex, }: {
        type: FormItemType;
        record: {
            [prop: string]: any;
        };
        dataIndex: string;
    }): any;
    /**
     * updateEditorCellDate
     * @description 更新可编辑单元格的数据
     * @param record 行数据
     * @param dataIndex 列索引
     * @param value 更新的值
     * @return Promise<void>
     */
    updateEditorCellDate({ record, dataIndex, value, }: {
        record: {
            [props: string]: any;
        };
        dataIndex: string;
        value: any;
    }): Promise<void>;
    /**
     * updateEditorCellDateData
     * @description 更新日期类型可编辑单元格的数据
     * @param record
     * @param dataIndex
     * @param value
     * @return Promise<void>
     */
    updateEditorCellDateData({ record, dataIndex, value, }: {
        record: {
            [props: string]: any;
        };
        dataIndex: string;
        value: moment.Moment | null;
    }): Promise<void>;
}
export default SearchEditorCellStateTable;

import type dayjs from 'dayjs';
import type { SearchTableImplementState, SearchTableStateImplementProps } from '../types';
declare const SearchEditableCellStateTable_base: {
    new (props: any): {
        [x: string]: any;
        valueToFormItemValueMap: Map<string, (params: {
            record: {
                [prop: string]: any;
            };
            dataIndex: string;
        }) => any>;
        onTableRowComponentReducers(columns: import("../types").ColumnTypeExt[]): string[];
        onTableCellComponentReducers(columns: import("../types").ColumnTypeExt[]): string[];
        onEditorRow(params: {
            columns: import("../types").ColumnTypeExt[];
            rowIndex: number;
            record: any;
        }): import("../types").RowEditableConfig;
        onEditorCell(params: {
            rowIndex: number;
            editorConfig: import("../types").ColumnEditableConfig;
            record: any;
        }): void;
        cellEditableReducer(params: {
            rowIndex: number;
            column: import("../types").ColumnTypeExt;
            record: {
                [prop: string]: any;
            };
            columns: import("../types").ColumnTypeExt[];
        }): import("../types").ColumnTypeExt;
        valueToFormItemValue({ type, record, dataIndex, }: {
            type: import("../types").FormItemType;
            record: {
                [prop: string]: any;
            };
            dataIndex: string;
        }): any;
        setActiveValue(activeValue: any): Promise<void>;
        getActiveValue(): any;
    };
    [x: string]: any;
};
/**
 * SearchEditableCellStateTable
 * @class
 * @classdesc 可编辑单元格的表格
 */
declare class SearchEditableCellStateTable<P extends SearchTableStateImplementProps, S extends SearchTableImplementState> extends SearchEditableCellStateTable_base {
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
        value: dayjs.Dayjs | null;
    }): Promise<void>;
}
export default SearchEditableCellStateTable;

import moment from 'moment';
import { TableComponents } from 'rc-table/lib/interface';
import { SearchTableImplement } from './SearchTableImplement';
import { ColumnTypeExt, SearchTableImplementProps, SearchTableImplementState } from './types';
/**
 * SearchEditorCellTable
 * @class
 * @classdesc 可编辑单元格的表格
 */
declare class SearchEditorCellTable<P extends SearchTableImplementProps, S extends SearchTableImplementState> extends SearchTableImplement<SearchTableImplementProps, SearchTableImplementState> {
    constructor(props: any);
    /**
     * onComponents
     * @param columns
     * @param components
     */
    onComponents(columns: ColumnTypeExt[], components: TableComponents<any>): TableComponents<any>;
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
export default SearchEditorCellTable;

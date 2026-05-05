import type { RowDragSortType } from '../../types';
declare const SearchRowDragSortTable_base: {
    new (props: any): {
        [x: string]: any;
        onTableRowComponentReducers(columns: import("../../types").ColumnTypeExt[]): string[];
        onTableCellComponentReducers(columns: import("../../types").ColumnTypeExt[]): string[];
        rowDragSortReducer(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: import("../../types").ColumnTypeExt[];
            rowConfig: import("../../types").RowConfig;
        }): import("../../types").RowConfig;
        cellDragSortReducer(params: {
            rowIndex: number;
            column: import("../../types").ColumnTypeExt;
            record: {
                [prop: string]: any;
            };
            columns: import("../../types").ColumnTypeExt[];
        }): import("../../types").ColumnTypeExt;
        getDragSortType(): RowDragSortType;
        onDragSortRow(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: import("../../types").ColumnTypeExt[];
        }): import("../../types").RowDragSortConfig;
        onDragSortCell(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: import("../../types").ColumnTypeExt[];
        }): import("../../types").ColumnRowDragSortConfig;
        render(): import("react").ReactElement;
    };
    [x: string]: any;
};
/**
 * SearchRowDragSortTable
 * @class
 */
declare class SearchRowDragSortTable extends SearchRowDragSortTable_base {
    /**
     * moveRow
     * @param {any} dragRecord
     * @param {any} hoverRecord
     * @param {RowDragSortType} dragSortType - 'swap' | 'sort'，默认从 getDragSortType() 读取
     * @return Promise<void>
     */
    moveRow(dragRecord: any, hoverRecord: any, dragSortType?: RowDragSortType): Promise<void>;
}
export default SearchRowDragSortTable;

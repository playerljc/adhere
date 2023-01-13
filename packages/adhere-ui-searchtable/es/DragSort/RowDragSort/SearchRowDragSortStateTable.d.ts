/// <reference types="react" />
declare const SearchRowDragSortStateTable_base: {
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
        render(): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
    };
    [x: string]: any;
};
/**
 * SearchRowDragSortStateTable
 * @class
 */
declare class SearchRowDragSortStateTable extends SearchRowDragSortStateTable_base {
    /**
     * moveRow
     * @param dragIndex
     * @param hoverIndex
     * @return Promise<void>
     */
    moveRow(dragIndex: number, hoverIndex: number): Promise<void>;
}
export default SearchRowDragSortStateTable;

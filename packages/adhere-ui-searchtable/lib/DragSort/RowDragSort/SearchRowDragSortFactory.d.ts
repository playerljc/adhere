import type { ReactElement } from 'react';
import type { ColumnRowDragSortConfig, ColumnTypeExt, RowConfig, RowDragSortConfig } from '../../types';
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
        /**
         * onTableRowComponentReducers
         * @param columns
         */
        onTableRowComponentReducers(columns: ColumnTypeExt[]): string[];
        /**
         * onTableCellComponentReducers
         * @param columns
         */
        onTableCellComponentReducers(columns: ColumnTypeExt[]): string[];
        /**
         * rowDragSortReducer
         * @param params
         */
        rowDragSortReducer(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: ColumnTypeExt[];
            rowConfig: RowConfig;
        }): RowConfig;
        /**
         * cellDragSortReducer
         * @param params
         */
        cellDragSortReducer(params: {
            rowIndex: number;
            column: ColumnTypeExt;
            record: {
                [prop: string]: any;
            };
            columns: ColumnTypeExt[];
        }): ColumnTypeExt;
        /**
         * onDragSortRow
         * @param params
         */
        onDragSortRow(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: ColumnTypeExt[];
        }): RowDragSortConfig;
        /**
         * onDragSortCell
         * @param params
         */
        onDragSortCell(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: ColumnTypeExt[];
        }): ColumnRowDragSortConfig;
        render(): ReactElement;
    };
    [x: string]: any;
};

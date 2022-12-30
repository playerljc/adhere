import React, { ReactElement } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ColumnRowDragSortConfig, ColumnTypeExt, RowConfig, RowDragSortConfig } from '../../types';

export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    constructor(props) {
      super(props);

      this.rowConfigReducers = [...this.rowConfigReducers, this.rowDragSortReducer];
      this.cellConfigReducers = [...this.cellConfigReducers, this.cellDragSortReducer];
    }

    /**
     * onTableRowComponentReducers
     * @param columns
     */
    onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
      return [...this.tableRowComponentReducers, 'useRowDragSortRow'];
    }

    /**
     * onTableCellComponentReducers
     * @param columns
     */
    onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
      return [...this.tableCellComponentReducers, 'useRowDragSortCell'];
    }

    /**
     * rowDragSortReducer
     * @param params
     */
    rowDragSortReducer(params: {
      rowIndex: number;
      record: { [prop: string]: any };
      columns: ColumnTypeExt[];
      rowConfig: RowConfig;
    }): RowConfig {
      const { rowConfig, rowIndex, columns, record } = params;

      rowConfig.$rowDragSort = this.onDragSortRow({
        rowIndex,
        record: { ...record },
        columns,
      });

      return rowConfig;
    }

    /**
     * cellDragSortReducer
     * @param params
     */
    cellDragSortReducer(params: {
      rowIndex: number;
      column: ColumnTypeExt;
      record: { [prop: string]: any };
      columns: ColumnTypeExt[];
    }): ColumnTypeExt {
      const { rowIndex, column, record, columns } = params;

      column.$rowDragSort = this.onDragSortCell({
        rowIndex,
        record: { ...record },
        columns,
      });

      return column;
    }

    /**
     * onDragSortRow
     * @param params
     */
    onDragSortRow(params: {
      rowIndex: number;
      record: { [prop: string]: any };
      columns: ColumnTypeExt[];
    }): RowDragSortConfig {
      return {};
    }

    /**
     * onDragSortCell
     * @param params
     */
    onDragSortCell(params: {
      rowIndex: number;
      record: { [prop: string]: any };
      columns: ColumnTypeExt[];
    }): ColumnRowDragSortConfig {
      return {};
    }

    render(): ReactElement {
      return <DndProvider backend={HTML5Backend}>{super.render()}</DndProvider>;
    }
  };
}

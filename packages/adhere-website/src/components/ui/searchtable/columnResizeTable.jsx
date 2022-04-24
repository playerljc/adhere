// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import Table from './table';

/**
 * ColumnResizeTable
 * @classdesc
 */
class ColumnResizeTable extends Table {
  getColumns() {
    return super.getColumns().map((column) => ({
      ...column,
      resizable: true,
    }));
  }
}

export default ColumnResizeTable;

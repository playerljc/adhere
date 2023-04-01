// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import Table from './table';

import styles from './fixedTableSpaceBetweenTable.less';

/**
 * TableDensitySetting
 * @classdesc
 */
class TableDensitySetting extends Table {
  renderSearchHeader() {
    return (
      <div className={styles.Header}>
        <h3>查询表格</h3>
        <div>{this.renderTableDensitySetting()}</div>
      </div>
    );
  }
}

export default TableDensitySetting;

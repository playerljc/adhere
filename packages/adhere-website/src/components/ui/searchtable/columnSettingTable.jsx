// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import Table from './table';
import styles from './fixedTableSpaceBetweenTable.less';

/**
 * ColumnSettingTable
 * @classdesc
 */
class ColumnSettingTable extends Table {
  renderTableHeader() {
    return (
      <div className={styles.Header}>
        <h3>查询表格</h3>
        <div>{this.renderColumnSetting()}</div>
      </div>
    );
  }
}

export default ColumnSettingTable;

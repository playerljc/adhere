import React from 'react';
import { Button } from 'antd';

import Table from './table';

import styles from './fixedTableSpaceBetweenTable.less';

/**
 * FixedTableSpaceBetweenTable
 * @classdesc
 */
class FixedTableSpaceBetweenTable extends Table {
  renderTableHeader() {
    return (
      <div className={styles.Header}>
        <h3>查询表格</h3>
        <div>
          <Button type="primary">新建</Button>
        </div>
      </div>
    );
  }

  renderTableFooter() {
    return <div className={styles.Footer}>renderTableFooter</div>;
  }
}

export default FixedTableSpaceBetweenTable;

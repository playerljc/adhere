import React from 'react';

import ColumnResizeTable from '../columnResizeTable';

import styles from './examples.less';

export default () => (
  <div className={styles.Wrapper}>
    <ColumnResizeTable
      style={{ height: '100%' }}
      isShowExpandSearch
      defaultExpandSearchCollapse={false}
      fixedHeaderAutoTable
    />
  </div>
);

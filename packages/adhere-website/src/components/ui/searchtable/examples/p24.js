import React from 'react';

import AsyncLoadDataTable from '../asyncLoadDataTable';

import styles from './examples.less';

export default () => {
  return (
    <div className={styles.Wrapper}>
      <AsyncLoadDataTable
        style={{ height: '100%' }}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
      />
    </div>
  );
};

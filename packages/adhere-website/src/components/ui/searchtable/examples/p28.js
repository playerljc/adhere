import React from 'react';

import DefaultSelectedRowKeysCheckedStrategySearchTable from '../defaultSelectedRowKeysCheckedStrategySearchTable';

import styles from './examples.less';

export default () => {
  return (
    <div className={styles.Wrapper}>
      <DefaultSelectedRowKeysCheckedStrategySearchTable
        style={{ height: '100%' }}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
      />
    </div>
  );
};

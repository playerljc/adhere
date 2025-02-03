import React from 'react';

import UseCheckedStrategyAndAsyncLoadDataSearchTable from '../useCheckedStrategyAndAsyncLoadDataSearchTable';

import styles from './examples.less';

export default () => {
  return (
    <div className={styles.Wrapper}>
      <UseCheckedStrategyAndAsyncLoadDataSearchTable
        style={{ height: '100%' }}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
      />
    </div>
  );
};

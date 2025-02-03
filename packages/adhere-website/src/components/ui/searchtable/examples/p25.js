import React from 'react';

import UseCheckedStrategySearchTable from '../useCheckedStrategySearchTable';

import styles from './examples.less';

export default () => {
  return (
    <div className={styles.Wrapper}>
      <UseCheckedStrategySearchTable
        style={{ height: '100%' }}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
      />
    </div>
  );
};

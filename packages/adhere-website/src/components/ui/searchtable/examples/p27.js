import React from 'react';

import UseCheckedStrategyAndAsyncLoadDataWithContinuonsSelectionModeSearchTable from '../useCheckedStrategyAndAsyncLoadDataWithContinuonsSelectionModeSearchTable';

import styles from './examples.less';

export default () => {
  return (
    <div className={styles.Wrapper}>
      <UseCheckedStrategyAndAsyncLoadDataWithContinuonsSelectionModeSearchTable
        style={{ height: '100%' }}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
      />
    </div>
  );
};

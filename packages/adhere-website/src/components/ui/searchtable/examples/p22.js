import React, { useState } from 'react';

import ProSearchStateTableImpl from '../cascaderSaerchProTable';

import styles from './examples.less';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div className={styles.Wrapper}>
      <ProSearchStateTableImpl
        style={{ height: '100%' }}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
        pagination={pagination}
      />
    </div>
  );
};

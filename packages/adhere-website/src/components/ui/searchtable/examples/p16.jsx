import React, { useState } from 'react';

import RowEditorStateSearchTable from '../rowEditorStateSearchTable';

import styles from './examples.less';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div className={styles.Wrapper}>
      <RowEditorStateSearchTable
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

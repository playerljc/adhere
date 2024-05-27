import React, { useState } from 'react';

import TableEditorStateSearchTable from '../tableEditorStateSearchTable';

import styles from './examples.less';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div className={styles.Wrapper}>
      <TableEditorStateSearchTable
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

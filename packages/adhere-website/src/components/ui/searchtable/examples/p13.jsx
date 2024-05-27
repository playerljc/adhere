import React, { useState } from 'react';

import RenderSearchBetweenTable from '../renderSearchBetweenTable';

import styles from './examples.less';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <div className={styles.Wrapper1}>
        <RenderSearchBetweenTable
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
          pagination={pagination}
        />
      </div>
    </>
  );
};

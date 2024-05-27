import React, { useState } from 'react';

import EditableCellRenderTriggerStateSearchTable from '../editorCellRenderTriggerStateSearchTable';

import styles from './examples.less';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div className={styles.Wrapper}>
      <EditableCellRenderTriggerStateSearchTable
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

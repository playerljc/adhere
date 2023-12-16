import React, { useState } from 'react';

import RowEditorStateSearchTable from '../rowEditorStateSearchTable';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div style={{ display: 'flex', height: 700 }}>
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

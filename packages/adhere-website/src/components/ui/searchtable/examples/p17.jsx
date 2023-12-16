import React, { useState } from 'react';

import TableEditorStateSearchTable from '../tableEditorStateSearchTable';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div style={{ display: 'flex', height: 700 }}>
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

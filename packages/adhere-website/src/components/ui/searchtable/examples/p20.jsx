import React, { useState } from 'react';

import ProRowDragSortSearchTable from '../proRowDragSortSearchTable';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div style={{ display: 'flex', height: 700 }}>
      <ProRowDragSortSearchTable
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

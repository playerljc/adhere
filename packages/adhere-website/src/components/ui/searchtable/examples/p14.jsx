import React, { useState } from 'react';

import ProSearchStateTableImpl from '../proStateSearchTable';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div style={{ display: 'flex', height: 700 }}>
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

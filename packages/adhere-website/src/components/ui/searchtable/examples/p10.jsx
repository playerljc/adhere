import React from 'react';

import ColumnResizeTable from '../columnResizeTable';

export default () => (
  <div style={{ display: 'flex', height: 700 }}>
    <ColumnResizeTable
      style={{ height: '100%' }}
      isShowExpandSearch
      defaultExpandSearchCollapse={false}
      fixedHeaderAutoTable
    />
  </div>
);

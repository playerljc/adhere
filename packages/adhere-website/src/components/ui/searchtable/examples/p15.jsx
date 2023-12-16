import React, { useState } from 'react';

import EditorCellStateSearchTable from '../editorCellStateSearchTable';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div style={{ display: 'flex', height: 700 }}>
      <EditorCellStateSearchTable
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

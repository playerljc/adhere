import React, { useState } from 'react';

import RenderSearchBetweenTable from '../renderSearchBetweenTable';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', height: 800 }}>
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

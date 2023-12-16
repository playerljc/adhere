import { Switch } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import FixedTableSpaceBetweenTable from '../fixedTableSpaceBetweenTable';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <Switch
        checkedChildren="分页"
        checked={pagination}
        onChange={() => {
          setPagination(!pagination);
        }}
      />

      <Space direction="vertical" />

      <div style={{ display: 'flex', height: 800 }}>
        <FixedTableSpaceBetweenTable
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

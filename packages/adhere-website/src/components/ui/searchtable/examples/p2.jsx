import { Switch } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import Table from '../table';

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

      <div style={{ display: 'flex', height: 400 }}>
        <Table
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          autoFixed
          pagination={pagination}
        />
      </div>
    </>
  );
};

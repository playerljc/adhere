import React from 'react';

import { Space } from '@baifendian/adhere';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <a>编辑</a>
      <Space direction="horizontal" />
      <a>查看</a>
      <Space direction="horizontal" />
      <a>删除</a>
    </div>
  );
};

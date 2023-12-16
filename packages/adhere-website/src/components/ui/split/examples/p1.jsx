import React from 'react';

import { Split } from '@baifendian/adhere';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <a>编辑</a>
      <Split direction="horizontal" />
      <a>查看</a>
      <Split direction="horizontal" />
      <a>删除</a>
    </div>
  );
};

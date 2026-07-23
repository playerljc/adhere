import React from 'react';

import Space from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 16 }}>
      <a>编辑</a>
      <Space direction="horizontal" />
      <a>查看</a>
      <Space direction="horizontal" />
      <a>删除</a>
    </div>
  );
};

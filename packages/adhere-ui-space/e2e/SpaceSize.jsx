import React from 'react';

import Space from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 16 }}>
      <div>
        <a>编辑</a>
        <Space direction="horizontal" size={10} />
        <a>查看</a>
        <Space direction="horizontal" size={10} />
        <a>删除</a>
      </div>

      <p style={{ marginTop: 24 }}>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <Space direction="vertical" size={10} />
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>

      <div style={{ marginTop: 24 }}>
        <a>编辑</a>
        <Space direction="horizontal" size="1.5rem" />
        <a>查看</a>
        <Space direction="horizontal" size="1.5rem" />
        <a>删除</a>
      </div>
    </div>
  );
};

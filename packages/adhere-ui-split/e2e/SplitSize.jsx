import React from 'react';

import Split from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', height: 40, marginBottom: 24 }}>
        <a>编辑</a>
        <Split direction="horizontal" size={10} horizontalFit />
        <a>查看</a>
        <Split direction="horizontal" size={10} horizontalFit />
        <a>删除</a>
      </div>

      <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <Split direction="vertical" size={10} />
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>

      <div style={{ display: 'flex', alignItems: 'center', height: 40, marginTop: 24 }}>
        <a>编辑</a>
        <Split direction="horizontal" size="1.5rem" horizontalFit />
        <a>查看</a>
        <Split direction="horizontal" size="1.5rem" horizontalFit />
        <a>删除</a>
      </div>
    </div>
  );
};

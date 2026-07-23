import React from 'react';

import Split from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 16 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 40,
          marginBottom: 24,
        }}
      >
        <Split.Group direction="horizontal" horizontalFit size={16}>
          <a>编辑</a>
          <a>查看</a>
          <a>删除</a>
        </Split.Group>
      </div>

      <Split.Group direction="vertical" size={16}>
        <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
        <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
        <p>段落3段落3段落3段落3段落3段落3段落3段落3</p>
      </Split.Group>
    </div>
  );
};

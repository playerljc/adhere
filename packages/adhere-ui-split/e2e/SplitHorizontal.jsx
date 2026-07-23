import React from 'react';

import Split from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 16, display: 'flex', alignItems: 'center', height: 40 }}>
      <a>编辑</a>
      <Split direction="horizontal" horizontalFit />
      <a>查看</a>
      <Split direction="horizontal" horizontalFit />
      <a>删除</a>
    </div>
  );
};

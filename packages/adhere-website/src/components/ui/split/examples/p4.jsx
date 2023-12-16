import React from 'react';

import { Split } from '@baifendian/adhere';

export default () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <Split.Group direction="horizontal">
        <a>编辑</a>
        <a>查看</a>
        <a>删除</a>
      </Split.Group>
    </div>

    <Split.Group direction="vertical">
      <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
    </Split.Group>
  </div>
);

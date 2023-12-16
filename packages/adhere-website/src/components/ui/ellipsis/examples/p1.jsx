import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

export default () => (
  <div style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}>
    <Ellipsis wrap={false}>
      详解 React v16.8 和 v18 官方提供的 Hooks API 使用方法，结合 TS、Jest 详细分析如何书写自定义
      Hooks，包括功能类、DOM 类、场景类等，共计 30+ 的自定义 Hooks 设计思路与实现
    </Ellipsis>
  </div>
);

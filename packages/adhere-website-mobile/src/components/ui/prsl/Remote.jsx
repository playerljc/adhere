import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/Remote';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="远程数据" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

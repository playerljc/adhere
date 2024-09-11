import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/Normal';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="基本使用" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

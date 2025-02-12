import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/Selection';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="选择模式" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

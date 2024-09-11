import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/Extra';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="扩展" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

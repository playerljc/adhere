import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/NoPaging';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="无分页" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

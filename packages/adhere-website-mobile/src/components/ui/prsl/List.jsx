import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/List';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item
      title="列表"
      style={{ height: '100%', overflow: 'hidden' }}
      bodyStyle={{ padding: 0 }}
    >
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/CustomSearchItem';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="自定义查询项" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

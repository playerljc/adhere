import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/CustomToolbarItem';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="自定义工具栏项" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

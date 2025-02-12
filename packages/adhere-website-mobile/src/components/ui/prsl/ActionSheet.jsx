import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/ActionSheet';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="使用ActionSheet进行操作" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

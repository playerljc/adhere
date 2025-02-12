import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P6 from './examples/p6';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="使用ActionSheet进行操作" style={{ height: '100%', overflow: 'hidden' }}>
      <P6 />
    </DemoBlock.Item>
  </DemoBlock>
);

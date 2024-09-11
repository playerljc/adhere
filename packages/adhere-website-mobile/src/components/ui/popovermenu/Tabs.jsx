import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P5 from './examples/p5';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="使用ActionSheet进行操作" style={{ height: '100%', overflow: 'hidden' }}>
      <P5 />
    </DemoBlock.Item>
  </DemoBlock>
);

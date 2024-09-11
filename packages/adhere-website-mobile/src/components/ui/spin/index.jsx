import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="基本使用">
      <P1 />
    </DemoBlock.Item>
  </DemoBlock>
);

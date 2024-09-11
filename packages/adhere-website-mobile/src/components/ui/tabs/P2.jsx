import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P10 from './examples/p10';

export default ({ children }) => (
  <DemoBlock>
    <DemoBlock.Item title="TabBar">
      <P10 children={children} />
    </DemoBlock.Item>
  </DemoBlock>
);

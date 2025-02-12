import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';
import P2 from './examples/p2';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="openSuccessMessage">
      <P1 />
    </DemoBlock.Item>

    <DemoBlock.Item title="openSuccessDialog">
      <P2 />
    </DemoBlock.Item>
  </DemoBlock>
);

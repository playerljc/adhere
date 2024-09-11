import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P2 from './examples/p2';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="Selector的AutoComplete" style={{ height: '100%', overflow: 'hidden' }}>
      <P2 />
    </DemoBlock.Item>
  </DemoBlock>
);

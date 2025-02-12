import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="CheckList的AutoComplete" style={{ height: '100%', overflow: 'hidden' }}>
      <P1 />
    </DemoBlock.Item>
  </DemoBlock>
);

import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P3 from './examples/p3';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="CheckBox的AutoComplete" style={{ height: '100%', overflow: 'hidden' }}>
      <P3 />
    </DemoBlock.Item>
  </DemoBlock>
);

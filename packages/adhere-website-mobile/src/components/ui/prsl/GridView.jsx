import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/GridView';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="多列" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

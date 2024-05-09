import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/Local';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="本地数据" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

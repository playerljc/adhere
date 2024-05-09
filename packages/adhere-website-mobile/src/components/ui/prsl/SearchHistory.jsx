import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/SearchHistory';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="查询历史" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

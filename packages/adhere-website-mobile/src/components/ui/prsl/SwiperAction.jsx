import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/SwiperAction';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="基本使用">
      <P1 />
    </DemoBlock.Item>

    <DemoBlock.Item title="多级菜单">
      <P2 />
    </DemoBlock.Item>

    <DemoBlock.Item title="不可用">
      <P3 />
    </DemoBlock.Item>

    <DemoBlock.Item title="可以滚动">
      <P4 />
    </DemoBlock.Item>
  </DemoBlock>
);

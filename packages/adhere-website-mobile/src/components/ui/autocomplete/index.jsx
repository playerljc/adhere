import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="基本使用">
      <Demo1 />
    </DemoBlock.Item>

    <DemoBlock.Item title="自定义渲染查询项">
      <Demo2 />
    </DemoBlock.Item>

    <DemoBlock.Item title="自定义渲染选择项">
      <Demo3 />
    </DemoBlock.Item>
  </DemoBlock>
);

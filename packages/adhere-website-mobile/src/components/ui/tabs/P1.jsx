import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';
import P8 from './examples/p8';
import P9 from './examples/p9';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="CapsuleTabs">
      <P1 />
    </DemoBlock.Item>

    <DemoBlock.Item title="CapsuleTabs - 超长自动滑动">
      <P2 />
    </DemoBlock.Item>

    <DemoBlock.Item title="JumboTabs">
      <P3 />
    </DemoBlock.Item>

    <DemoBlock.Item title="JumboTabs - 超长自动滑动">
      <P4 />
    </DemoBlock.Item>

    <DemoBlock.Item title="SideTabs">
      <P5 />
    </DemoBlock.Item>

    <DemoBlock.Item title="Tabs">
      <P6 />
    </DemoBlock.Item>

    <DemoBlock.Item title="Tabs - 超长">
      <P7 />
    </DemoBlock.Item>

    <DemoBlock.Item title="Tabs - swiper">
      <P8 />
    </DemoBlock.Item>

    <DemoBlock.Item title="Tabs - noShowArrowMore">
      <P9 />
    </DemoBlock.Item>
  </DemoBlock>
);

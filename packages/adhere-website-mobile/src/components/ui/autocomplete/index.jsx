import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="CheckList的AutoComplete">
      <P1 />
    </DemoBlock.Item>

    <DemoBlock.Item title="Selector的AutoComplete">
      <P2 />
    </DemoBlock.Item>

    <DemoBlock.Item title="CheckBox的AutoComplete">
      <P3 />
    </DemoBlock.Item>
  </DemoBlock>
);

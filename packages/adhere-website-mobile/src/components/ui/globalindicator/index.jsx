import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';
import P2 from './examples/p2';

export default () => {
  return (
    <DemoBlock>
      <DemoBlock.Item title="全局的遮罩">
        <P1 />
      </DemoBlock.Item>

      <DemoBlock.Item title="局部的遮罩">
        <P2 />
      </DemoBlock.Item>
    </DemoBlock>
  );
};

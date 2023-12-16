import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';

export default () => {
  return (
    <DemoBlock>
      <DemoBlock.Item title="HH:mm:ss">
        <P1 />
      </DemoBlock.Item>

      <DemoBlock.Item title="HH:mm">
        <P2 />
      </DemoBlock.Item>

      <DemoBlock.Item title="HH">
        <P3 />
      </DemoBlock.Item>

      <DemoBlock.Item title="mm:ss">
        <P4 />
      </DemoBlock.Item>

      <DemoBlock.Item title="ss">
        <P5 />
      </DemoBlock.Item>

      <DemoBlock.Item title="onChange">
        <P6 />
      </DemoBlock.Item>
    </DemoBlock>
  );
};

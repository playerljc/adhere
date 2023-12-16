import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';

export default () => {
  return (
    <DemoBlock>
      <DemoBlock.Item title="使用TriggerPrompt弹出MessageDialog">
        <P1 />
      </DemoBlock.Item>

      <DemoBlock.Item title="使用TriggerPrompt选取人员">
        <P2 />
      </DemoBlock.Item>

      <DemoBlock.Item title="在表单中当作一个FormItem来使用TriggerPrompt">
        <P3 />
      </DemoBlock.Item>

      <DemoBlock.Item title="弹出一个表单进行处理">
        <P4 />
      </DemoBlock.Item>
    </DemoBlock>
  );
};

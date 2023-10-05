import { Button } from 'antd-mobile';
import React from 'react';

import { MobileWarnPrompt } from '@baifendian/adhere';

import DemoBlock from '@/lib/DemoBlock';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="openWarnMessage">
      <Button
        onClick={() => {
          MobileWarnPrompt.openWarnMessage({
            content: '操作异常',
          });
        }}
      >
        openWarnMessage
      </Button>
    </DemoBlock.Item>

    <DemoBlock.Item title="openWarnDialog">
      <Button
        onClick={() => {
          MobileWarnPrompt.openWarnDialog({
            content: '操作异常',
          });
        }}
      >
        openWarnDialog
      </Button>
    </DemoBlock.Item>
  </DemoBlock>
);

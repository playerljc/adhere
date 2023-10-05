import { Button } from 'antd-mobile';
import React from 'react';

import { MobileSuccessPrompt } from '@baifendian/adhere';

import DemoBlock from '@/lib/DemoBlock';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="openSuccessMessage">
      <Button
        onClick={() => {
          MobileSuccessPrompt.openSuccessMessage({
            content: '操作成功',
          });
        }}
      >
        openSuccessMessage
      </Button>
    </DemoBlock.Item>

    <DemoBlock.Item title="openSuccessDialog">
      <Button
        onClick={() => {
          MobileSuccessPrompt.openSuccessDialog({
            content: '操作成功',
          });
        }}
      >
        openSuccessDialog
      </Button>
    </DemoBlock.Item>
  </DemoBlock>
);

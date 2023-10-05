import { Button } from 'antd-mobile';
import React from 'react';

import { MobileErrorPrompt } from '@baifendian/adhere';

import DemoBlock from '@/lib/DemoBlock';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="openErrorMessage">
      <Button
        onClick={() => {
          MobileErrorPrompt.openErrorMessage({
            content: '操作失败',
          });
        }}
      >
        openErrorMessage
      </Button>
    </DemoBlock.Item>

    <DemoBlock.Item title="openErrorDialog">
      <Button
        onClick={() => {
          MobileErrorPrompt.openErrorDialog({
            content: '操作失败',
          });
        }}
      >
        openErrorDialog
      </Button>
    </DemoBlock.Item>
  </DemoBlock>
);

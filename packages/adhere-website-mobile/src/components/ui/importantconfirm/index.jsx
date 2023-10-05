import { Button } from 'antd-mobile';
import React from 'react';

import { MobileImportantConfirm } from '@baifendian/adhere';

import DemoBlock from '@/lib/DemoBlock';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="api方式">
      <Button
        block
        color="primary"
        onClick={() => {
          MobileImportantConfirm.open({
            onConfirm: () => {
              alert('confirm');
            },
          });
        }}
      >
        关闭
      </Button>
    </DemoBlock.Item>

    <DemoBlock.Item title="组件方式">
      <MobileImportantConfirm
        onConfirm={() => {
          alert('confirm');
        }}
      >
        <Button block color="primary">
          关闭
        </Button>
      </MobileImportantConfirm>
    </DemoBlock.Item>
  </DemoBlock>
);

import { Button } from 'antd-mobile';
import React from 'react';

import { MobileDelConfirm } from '@baifendian/adhere';

import DemoBlock from '@/lib/DemoBlock';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="api方式">
      <Button
        block
        color="primary"
        onClick={() => {
          MobileDelConfirm.open({
            onConfirm: () => {
              alert('confirm');
            },
          });
        }}
      >
        删除
      </Button>
    </DemoBlock.Item>

    <DemoBlock.Item title="组件方式">
      <MobileDelConfirm
        onConfirm={() => {
          alert('confirm');
        }}
      >
        <Button block color="primary">
          删除
        </Button>
      </MobileDelConfirm>
    </DemoBlock.Item>
  </DemoBlock>
);

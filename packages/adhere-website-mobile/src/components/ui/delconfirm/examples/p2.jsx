import { Button } from 'antd-mobile';
import React from 'react';

import { MobileDelConfirm } from '@baifendian/adhere';

export default () => (
  <MobileDelConfirm
    onConfirm={() => {
      alert('confirm');
    }}
  >
    <Button block color="primary">
      删除
    </Button>
  </MobileDelConfirm>
);

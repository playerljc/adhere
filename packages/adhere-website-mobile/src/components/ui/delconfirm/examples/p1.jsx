import { Button } from 'antd-mobile';
import React from 'react';

import { MobileDelConfirm } from '@baifendian/adhere';

export default () => (
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
);

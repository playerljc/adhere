import { Button } from 'antd-mobile';
import React from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';

export default () => (
  <Button
    block
    color="primary"
    onClick={() => {
      const handler = MobileGlobalIndicator.show(document.body, '全局的遮罩');

      setTimeout(() => {
        MobileGlobalIndicator.hide(handler);
      }, 2000);
    }}
  >
    显示遮罩
  </Button>
);

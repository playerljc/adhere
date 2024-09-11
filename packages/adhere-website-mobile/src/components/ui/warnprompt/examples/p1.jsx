import { Button } from 'antd-mobile';
import React from 'react';

import { MobileWarnPrompt } from '@baifendian/adhere';

export default () => (
  <Button
    onClick={() => {
      MobileWarnPrompt.openWarnMessage({
        content: '操作异常',
      });
    }}
  >
    openWarnMessage
  </Button>
);

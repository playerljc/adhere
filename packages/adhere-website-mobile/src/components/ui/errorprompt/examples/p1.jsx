import { Button } from 'antd-mobile';
import React from 'react';

import { MobileErrorPrompt } from '@baifendian/adhere';

export default () => (
  <Button
    onClick={() => {
      MobileErrorPrompt.openErrorMessage({
        content: '操作失败',
      });
    }}
  >
    openErrorMessage
  </Button>
);

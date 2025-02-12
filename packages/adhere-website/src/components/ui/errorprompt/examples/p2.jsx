import { Button } from 'antd';
import React from 'react';

import { ErrorPrompt } from '@baifendian/adhere';

export default () => (
  <Button
    type="primary"
    onClick={() => {
      ErrorPrompt.openErrorDialog({
        title: '提示',
        content: '操作失败',
      });
    }}
  >
    显示错误提示
  </Button>
);

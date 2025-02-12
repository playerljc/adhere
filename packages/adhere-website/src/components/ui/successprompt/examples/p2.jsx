import { Button } from 'antd';
import React from 'react';

import { SuccessPrompt } from '@baifendian/adhere';

export default () => (
  <Button
    type="primary"
    onClick={() => {
      SuccessPrompt.openSuccessDialog({
        title: '提示',
        content: '操作成功',
      });
    }}
  >
    显示成功提示
  </Button>
);

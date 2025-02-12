import { Button } from 'antd';
import React from 'react';

import { SuccessPrompt } from '@baifendian/adhere';

export default () => (
  <Button
    type="primary"
    onClick={() => {
      SuccessPrompt.openSuccessMessage('操作成功');
    }}
  >
    显示成功提示
  </Button>
);

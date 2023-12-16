import { Button } from 'antd';
import React from 'react';

import { ErrorPrompt } from '@baifendian/adhere';

export default () => (
  <Button
    type="primary"
    onClick={() => {
      ErrorPrompt.openErrorMessage('操作失败');
    }}
  >
    显示错误提示
  </Button>
);

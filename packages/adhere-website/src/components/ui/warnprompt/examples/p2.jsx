import { Button } from 'antd';
import React from 'react';

import { WarnPrompt } from '@baifendian/adhere';

export default () => (
  <Button
    type="primary"
    onClick={() => {
      WarnPrompt.openWarnDialog({
        title: '提示',
        content: '操作异常',
      });
    }}
  >
    显示警告提示
  </Button>
);

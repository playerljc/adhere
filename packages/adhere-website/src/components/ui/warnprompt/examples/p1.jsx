import { Button } from 'antd';
import React from 'react';

import { WarnPrompt } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        WarnPrompt.openWarnMessage('操作异常');
      }}
    >
      显示警告提示
    </Button>
  );
};

import { Button } from 'antd-mobile';
import React from 'react';

import { MobileSuccessPrompt } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      onClick={() => {
        MobileSuccessPrompt.openSuccessMessage({
          content: '操作成功',
        });
      }}
    >
      openSuccessMessage
    </Button>
  );
};

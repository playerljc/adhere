import { Button } from 'antd-mobile';
import React from 'react';

import { MobileSuccessPrompt } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      onClick={() => {
        MobileSuccessPrompt.openSuccessDialog({
          content: '操作成功',
        });
      }}
    >
      openSuccessDialog
    </Button>
  );
};

import { Button } from 'antd-mobile';
import React from 'react';

import { MobileImportantConfirm } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      block
      color="primary"
      onClick={() => {
        MobileImportantConfirm.open({
          onConfirm: () => {
            alert('confirm');
          },
        });
      }}
    >
      关闭
    </Button>
  );
};

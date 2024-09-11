import { Button } from 'antd-mobile';
import React from 'react';

import { MobileImportantConfirm } from '@baifendian/adhere';

export default () => {
  return (
    <MobileImportantConfirm
      onConfirm={() => {
        alert('confirm');
      }}
    >
      <Button block color="primary">
        关闭
      </Button>
    </MobileImportantConfirm>
  );
};

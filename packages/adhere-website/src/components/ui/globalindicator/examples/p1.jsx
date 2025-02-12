import { Button } from 'antd';
import React from 'react';

import { GlobalIndicator } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      onClick={() => {
        setTimeout(() => {
          GlobalIndicator.hide(el);
        }, 2000);

        const el = GlobalIndicator.show(document.body, '全局的遮罩');
      }}
    >
      显示遮罩
    </Button>
  );
};

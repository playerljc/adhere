import { Button } from 'antd';
import React from 'react';

import { MessageDialog } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.InputPrompt({
          title: '提示',
          config: {
            label: '姓名',
            initialValue: '张三',
          },
          width: 300,
          zIndex: 1000,
          local: 'zh_CN',
          onSuccess: (value) => {
            return new Promise((resolve) => {
              alert(value);
              resolve();
            });
          },
        });
      }}
    >
      Open InputPrompt
    </Button>
  );
};

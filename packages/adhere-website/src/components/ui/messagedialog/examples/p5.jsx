import { Button } from 'antd';
import React from 'react';

import { MessageDialog } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.TextAreaPrompt({
          title: '提示',
          config: {
            schema: {
              properties: {
                value: {
                  title: '地址',
                  defaultValue: '',
                },
              },
            },
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
      Open TextAreaPrompt
    </Button>
  );
};

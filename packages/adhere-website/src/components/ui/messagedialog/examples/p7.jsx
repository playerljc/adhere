import { Button } from 'antd';
import React from 'react';

import { MessageDialog } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.NumberPrompt({
          title: '提示',
          config: {
            schema: {
              properties: {
                value: {
                  title: '数字',
                  defaultValue: '',
                  props: {
                    placeholder: '111',
                  },
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
      Open NumberPrompt
    </Button>
  );
};

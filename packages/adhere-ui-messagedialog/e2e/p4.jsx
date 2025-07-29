import { Button } from 'antd';
import React from 'react';

import MessageDialog from '../src';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.InputPrompt({
          title: '提示',
          config: {
            schema: {
              properties: {
                value: {
                  title: '姓名',
                  defaultValue: '张三',
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
      Open InputPrompt
    </Button>
  );
};

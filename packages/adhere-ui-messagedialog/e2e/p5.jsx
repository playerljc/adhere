import { Button } from 'antd';
import React from 'react';

import MessageDialog from '../src';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.TextAreaPrompt({
          title: '提示（垂直布局）',
          config: {
            schema: {
              properties: {
                value: {
                  title: '地址',
                  defaultValue: '',
                },
              },
            },
            // 使用垂直布局
            layout: {
              type: 'vertical',
            },
          },
          width: 400,
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

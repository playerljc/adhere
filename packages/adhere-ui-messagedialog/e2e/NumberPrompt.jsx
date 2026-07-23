import { Button } from 'antd';
import React from 'react';

import MessageDialog from '../src';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.NumberPrompt({
          title: '提示（自定义布局 + 无冒号）',
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
            // 自定义布局配置，不显示冒号
            layout: {
              type: 'horizontal',
              labelCol: { span: 4 },
              wrapperCol: { span: 20 },
              colon: false,
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
      Open NumberPrompt
    </Button>
  );
};

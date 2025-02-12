import { Button } from 'antd';
import React from 'react';

import { FormItemCreator, MessageDialog } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.Prompt({
          title: '提示',
          config: {
            type: FormItemCreator.SLIDER,
            label: '大小',
            initialValue: 10,
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
      Open Prompt
    </Button>
  );
};

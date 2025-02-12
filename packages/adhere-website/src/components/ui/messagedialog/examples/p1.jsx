import { Button } from 'antd';
import React from 'react';

import { MessageDialog } from '@baifendian/adhere';

import icon from '../icon.svg';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.Confirm({
          title: '提示',
          text: '确认要进行此操作码？',
          width: 300,
          zIndex: 1000,
          local: 'zh_CN',
          icon: <img src={icon} alt="" width={30} />,
          onSuccess: () => {
            return new Promise((resolve) => {
              alert('点击了确认');

              resolve();
            });
          },
        });
      }}
    >
      Open Confirm
    </Button>
  );
};

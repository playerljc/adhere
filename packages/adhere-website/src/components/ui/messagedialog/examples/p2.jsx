import { Button } from 'antd';
import React from 'react';

import { MessageDialog } from '@baifendian/adhere';

import icon from '../icon.svg';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.Alert({
          title: '提示',
          text: '操作失败！',
          width: 300,
          zIndex: 1000,
          local: 'zh_CN',
          icon: <img src={icon} alt="" width={30} />,
        });
      }}
    >
      Open Alert
    </Button>
  );
};

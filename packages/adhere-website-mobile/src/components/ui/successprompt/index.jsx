import { List } from 'antd-mobile';
import React from 'react';

import { MobileSuccessPrompt } from '@baifendian/adhere';

export default () => {
  debugger;

  return (
    <List>
      <List.Item
        onClick={() => {
          MobileSuccessPrompt.openSuccessMessage({
            content: '操作成功',
          });
        }}
      >
        openSuccessMessage
      </List.Item>
      <List.Item
        onClick={() => {
          MobileSuccessPrompt.openSuccessDialog({
            content: '操作成功',
          });
        }}
      >
        openSuccessDialog
      </List.Item>
    </List>
  );
};

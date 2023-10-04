import { List } from 'antd-mobile';
import React from 'react';

import { MobileErrorPrompt } from '@baifendian/adhere';

export default () => (
  <List>
    <List.Item
      onClick={() => {
        MobileErrorPrompt.openErrorMessage({
          content: '操作失败',
        });
      }}
    >
      openErrorMessage
    </List.Item>
    <List.Item
      onClick={() => {
        MobileErrorPrompt.openErrorDialog({
          content: '操作失败',
        });
      }}
    >
      openErrorDialog
    </List.Item>
  </List>
);

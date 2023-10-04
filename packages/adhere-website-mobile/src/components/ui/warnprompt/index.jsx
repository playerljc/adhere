import { List } from 'antd-mobile';
import React from 'react';

import { MobileWarnPrompt } from '@baifendian/adhere';

export default () => (
  <List>
    <List.Item
      onClick={() => {
        MobileWarnPrompt.openWarnMessage({
          content: '操作异常',
        });
      }}
    >
      openWarnMessage
    </List.Item>
    <List.Item
      onClick={() => {
        MobileWarnPrompt.openWarnDialog({
          content: '操作异常',
        });
      }}
    >
      openWarnDialog
    </List.Item>
  </List>
);

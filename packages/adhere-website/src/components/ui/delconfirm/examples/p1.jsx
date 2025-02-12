import React from 'react';

import { DelConfirm } from '@baifendian/adhere';

export default () => (
  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
);

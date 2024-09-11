import React from 'react';

import { DelConfirm } from '@baifendian/adhere';

export default () => (
  <a
    onClick={() => {
      DelConfirm.open({
        success: () =>
          new Promise((resolve) => {
            alert('点击了确认');

            resolve();
          }),
      });
    }}
  >
    删除
  </a>
);

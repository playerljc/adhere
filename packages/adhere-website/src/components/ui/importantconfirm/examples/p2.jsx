import React from 'react';

import { ImportantConfirm } from '@baifendian/adhere';

export default () => {
  return (
    <a
      onClick={() => {
        ImportantConfirm.open({
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
};

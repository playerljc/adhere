import React from 'react';

import { ImportantConfirm } from '@baifendian/adhere';

export default () => {
  return (
    <ImportantConfirm
      success={() => {
        return new Promise((resolve) => {
          alert('点击了确认');

          resolve();
        });
      }}
    >
      <a>删除</a>
    </ImportantConfirm>
  );
};

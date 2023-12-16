import { Button } from 'antd';
import React from 'react';

import { NotNull } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        const arr = NotNull([]);
        console.log(arr[5].a.b.c);

        arr[5] = {
          a: {
            b: {
              c: {},
            },
          },
        };

        console.log(arr[5]);
        console.log(arr.length);
      }}
    >
      监控并访问
    </Button>
  );
};

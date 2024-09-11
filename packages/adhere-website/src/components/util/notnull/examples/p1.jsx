import { Button } from 'antd';
import React from 'react';

import { NotNull } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        const obj = NotNull(null);
        obj.a = {
          b: {
            c: {},
          },
        };
        console.log(obj);
        console.log(obj.a);
        console.log(obj.a.b);
        console.log(obj.a.b.c);
        console.log(obj.a.b.c.d.e);
      }}
    >
      监控并访问
    </Button>
  );
};

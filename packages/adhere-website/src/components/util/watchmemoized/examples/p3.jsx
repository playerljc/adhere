import { Button } from 'antd';
import React from 'react';

import { Space, WatchMemoized } from '@baifendian/adhere';

const { watch } = WatchMemoized;

export default () => {
  // watch监控对象的变化
  const srcObj1 = {};
  const watchObj1 = watch.create(srcObj1, {
    a: () => {
      console.log('a改变了');
    },
    b: () => {
      console.log('b改变了');
    },
    c: () => {
      console.log('c改变了');
    },
    'c.c1': () => {
      console.log('c.c1改变了');
    },
    'c.c1.c111.c1111': (property) => {
      console.log('c.c1.c111.c1111改变了', property);
    },
  });
  watchObj1.on('c.c1.c111', () => {
    console.log('c.c1.c111改变了');
  });

  return (
    <Space.Group direction="horizontal" size={10}>
      <Button
        onClick={() => {
          watchObj1.value.a = 'a';
          watchObj1.value.b = 'b';
          watchObj1.value.c = { gl: 1 };
          watchObj1.value.c.c1 = {
            g2: 2,
          };
          watchObj1.value.c.c1.c111 = {
            g3: 3,
            c1111: '1',
          };

          delete watchObj1.value.c.c1.c111.c1111;
        }}
      >
        对obj1进行监控
      </Button>
    </Space.Group>
  );
};

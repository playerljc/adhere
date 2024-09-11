import { Button } from 'antd';
import React from 'react';

import { Space, WatchMemoized } from '@baifendian/adhere';

const { createRef, memoized } = WatchMemoized;

export default () => {
  // 多值监控light比较
  const [get4Value, set4Value, property4] = createRef([{ a: 1 }]);
  const [get5Value, set5Value, property5] = createRef([{ a: 2 }]);
  console.log('srcValue4', get4Value());
  console.log('srcValue5', get5Value());
  memoized.watch.all(() => {
    console.log('changeValue', get4Value());
    console.log('changeValue', get5Value());
  }, [
    {
      property: property4,
      mode: 'light',
    },
    {
      property: property5,
      mode: 'light',
    },
  ]);

  return (
    <Space.Group direction="horizontal" size={10}>
      <Button
        onClick={() => {
          set4Value([{ a: 1 }]);
          set5Value([{ a: 2 }]);
        }}
      >
        light比较
      </Button>
    </Space.Group>
  );
};

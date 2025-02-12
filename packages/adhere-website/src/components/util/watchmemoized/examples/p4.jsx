import { Button } from 'antd';
import React from 'react';

import { Space, WatchMemoized } from '@baifendian/adhere';

const { memoized } = WatchMemoized;

export default () => {
  // 创建一个memoized的函数
  const sumFun = memoized.createMemoFun((...params) => {
    console.log('callSumFun');
    return params.reduce((pre, current) => pre + current, 0);
  });

  return (
    <Space.Group direction="horizontal" size={10}>
      <Button
        onClick={() => {
          console.log('subFun', sumFun({ a: 1 }, 2, 3));
          console.log('subFun', sumFun({ a: 1 }, 2, 3));
        }}
      >
        调用memoized函数
      </Button>
    </Space.Group>
  );
};

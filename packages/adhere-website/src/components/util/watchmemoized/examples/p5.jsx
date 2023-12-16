import { Button } from 'antd';
import React from 'react';

import { Space, WatchMemoized } from '@baifendian/adhere';

const { memoized } = WatchMemoized;

export default () => {
  // 创建一个memoized的Promise函数
  const asyncFun = memoized.createMemoFun((...params) => {
    console.log('callAnyncFun');
    return new Promise((resolve) => {
      resolve(params.reduce((pre, current) => pre + current, 0));
    });
  });

  return (
    <Space.Group direction="horizontal" size={10}>
      <Button
        onClick={() => {
          asyncFun(1, 2, 3).then((res) => {
            console.log('asyncFun', res);
          });

          console.log('asyncFun', asyncFun(1, 2, 3));

          console.log('asyncFun', asyncFun(1, 2, 4));
          console.log('asyncFun', asyncFun(1, 2, 4));
        }}
      >
        调用memoized函数
      </Button>
    </Space.Group>
  );
};

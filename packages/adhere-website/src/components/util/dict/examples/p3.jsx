import React from 'react';

import { Dict } from '@baifendian/adhere';

export default () => {
  const Test3Dict = {
    initStatic() {
      Dict.handlers.Test3SumDict = () => (a, b) => a + b;
    },
    initRemote() {},
  };

  // 初始化
  Dict.init([Test3Dict], {});

  // 使用字典
  return (
    <>
      <p>
        <span>第一次计算a + b：</span>
        {Dict.value.Test3SumDict.value(1, 2)}
      </p>
      <p>
        <span>缓存值：</span>
        {Dict.value.Test3SumDict.value(1, 2)}
      </p>
    </>
  );
};

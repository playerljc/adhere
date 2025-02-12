import React from 'react';

import { Dict } from '@baifendian/adhere';

export default () => {
  const Test4Dict = {
    initStatic() {
      Dict.handlers.Test4SumDict = () => (a, b) => a + b;
      // 不使用缓存
      Dict.handlers.Test4SumDict.isUseMemo = false;
    },
    initRemote() {},
  };

  // 初始化
  Dict.init([Test4Dict], {});

  // 使用字典
  return (
    <>
      <p>
        <span>第一次计算a + b：</span>
        {Dict.value.Test4SumDict.value(1, 2)}
      </p>
      <p>
        <span>第二次计算a + b：</span>
        {Dict.value.Test4SumDict.value(1, 2)}
      </p>
    </>
  );
};

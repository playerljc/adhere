import React from 'react';

import { Dict } from '@baifendian/adhere';

export default () => {
  // 第一个字典
  const Test1Dict = {
    initStatic() {
      Dict.handlers.Test1Dict = () => [
        {
          value: 1,
          label: '通过',
        },
        {
          value: 2,
          label: '不通过',
        },
        {
          value: 3,
          label: '退回',
        },
      ];
    },
    initRemote() {},
  };

  // 初始化
  Dict.init([Test1Dict], {});

  // 使用字典
  return <div>{JSON.stringify(Dict.value.Test1Dict.value)}</div>;
};

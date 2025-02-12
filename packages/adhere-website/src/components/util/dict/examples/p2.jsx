import React, { useEffect, useState } from 'react';

import { Dict } from '@baifendian/adhere';

export default () => {
  function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
      Dict.value.Test2Dict.value.then((res) => setData(res));
    }, []);

    return <div>{JSON.stringify(data)}</div>;
  }

  // 第一个字典
  const Test2Dict = {
    initStatic() {},
    initRemote() {
      Dict.handlers.Test2Dict = () =>
        Promise.resolve([
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
        ]);
    },
  };

  // 初始化
  Dict.init([Test2Dict], {});

  // 使用字典
  return <Test />;
};

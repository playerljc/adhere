import React, { useState } from 'react';
import { v1 } from 'uuid';

import { Dict } from '@baifendian/adhere';

export default () => {
  function Test() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>{JSON.stringify(Dict.value.Test5Dict.value)}</p>
        <div>
          <button
            onClick={() => {
              Dict.value.Test5Dict.refresh();
              setCount(Date.now());
            }}
          >
            刷新
          </button>
        </div>
      </div>
    );
  }

  const Test5Dict = {
    initStatic() {},
    initRemote() {
      Dict.handlers.Test5Dict = () => [v1(), v1(), v1()];
    },
  };

  // 初始化
  Dict.init([Test5Dict], {});

  // 使用字典
  return <Test />;
};

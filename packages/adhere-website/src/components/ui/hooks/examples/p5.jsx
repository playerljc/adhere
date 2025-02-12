import { Button } from 'antd';
import React, { useState } from 'react';

import { Hooks } from '@baifendian/adhere';

const { usePropToState } = Hooks;

function MyComponent({ defaultCount }) {
  const [count, setCount] = usePropToState(defaultCount);

  setInterval(() => {
    setCount((_count) => {
      return _count + 1;
    });
  }, 1000);

  return <div>{count}</div>;
}

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyComponent defaultCount={count} />
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        设置新值
      </Button>
    </div>
  );
};

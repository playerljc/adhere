import React from 'react';

import { Hooks } from '@baifendian/adhere';

const { useLatestState } = Hooks;

export default () => {
  const [countRef, setCount] = useLatestState(0);

  setInterval(() => {
    setCount(countRef.current + 1);
  }, 1000);

  return <div>{countRef.current}</div>;
};

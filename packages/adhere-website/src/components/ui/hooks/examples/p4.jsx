import React from 'react';

import { Hooks } from '@baifendian/adhere';

const { useSetState } = Hooks;

export default () => {
  const [countRef, setCount] = useSetState(0);

  setInterval(() => {
    setCount(countRef.current + 1, () => {
      // console.log('countRef.current', countRef.current);
    });
  }, 1000);

  return <div>{countRef.current}</div>;
};

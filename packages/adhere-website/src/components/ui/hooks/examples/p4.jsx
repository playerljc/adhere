import React, { useEffect } from 'react';

import { Hooks } from '@baifendian/adhere';

const { useSetState } = Hooks;

export default () => {
  const [count, setCount] = useSetState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1, (latest) => {
        // console.log('latest', latest);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{count}</div>;
};

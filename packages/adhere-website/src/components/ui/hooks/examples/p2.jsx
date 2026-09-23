import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Hooks, Space } from '@baifendian/adhere';

const { useSetState, useFirst, usePrevious } = Hooks;

export default () => {
  const [count1, setCount1] = useSetState(0);

  const [count2, setCount2] = useSetState(0);

  const [count3, setCount3] = useSetState(0);

  const [isFirst, updateFirst] = useFirst();

  const val = usePrevious(3);

  console.log(val);

  useEffect(() => {
    console.log('isFirst', isFirst);
    updateFirst(true);
  }, []);

  return (
    <div>
      <div>
        <Space.Group direction="horizontal">
          <Button
            onClick={() => {
              setCount1((prev) => prev + 1, (latest) => console.log('count1更新完成', latest));
            }}
          >
            setCount1
          </Button>
          <Button
            onClick={() => {
              setCount2((prev) => prev + 1, (latest) => console.log('count2更新完成', latest));
            }}
          >
            setCount2
          </Button>
          <Button
            onClick={() => {
              setCount3(
                (count) => count + 1,
                (latest) => console.log('count3更新完成', latest),
              );
            }}
          >
            setCount3
          </Button>
        </Space.Group>
      </div>
      <div>
        <p>count1: {count1}</p>
        <p>count2: {count2}</p>
        <p>count3: {count3}</p>
      </div>
    </div>
  );
};

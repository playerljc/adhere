import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Hooks, Space } from '@baifendian/adhere';

const { useSetState, useFirst, usePrevious } = Hooks;

export default () => {
  const [count1Ref, setCount1] = useSetState(0);

  const [count2Ref, setCount2] = useSetState(0);

  const [count3Ref, setCount3] = useSetState(0);

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
              setCount1(count1Ref.current + 1, () => console.log('count1更新完成'));
            }}
          >
            setCount1
          </Button>
          <Button
            onClick={() => {
              setCount2(count2Ref.current + 1, () => console.log('count2更新完成'));
            }}
          >
            setCount2
          </Button>
          <Button
            onClick={() => {
              setCount3(
                (count) => count + 1,
                () => console.log('count3更新完成'),
              );
            }}
          >
            setCount3
          </Button>
        </Space.Group>
      </div>
      <div>
        <p>count1: {count1Ref.current}</p>
        <p>count2: {count2Ref.current}</p>
        <p>count3: {count3Ref.current}</p>
      </div>
    </div>
  );
};

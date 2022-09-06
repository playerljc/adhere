import React, { useRef } from 'react';
import { Button } from 'antd';
import { ForceUpdate, Hooks, Space } from '@baifendian/adhere';

import Sub from './sub';

const { useSetState } = Hooks;

export default () => {
  const ref = useRef();
  const [count, setCount] = useSetState(0);

  return (
    <ForceUpdate ref={ref}>
      <div>
        <Space.Group direction="horizontal">
          <Button type="primary" onClick={() => setCount((_count) => _count + 1)}>
            递增
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setCount(0, () => ref.current.reMount());
            }}
          >
            重置
          </Button>
        </Space.Group>
        <Sub count={count} />
      </div>
    </ForceUpdate>
  );
};

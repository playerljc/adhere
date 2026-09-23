import { Button, Space } from 'antd';
import React from 'react';

import Hooks from '../src';

const { useSetState } = Hooks;

/**
 * useSetState
 * @description 与 useState 相同，设置函数可多传一个提交后回调
 */
export default () => {
  const [count, setCount] = useSetState(0);

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <Space direction="vertical">
        <div>count: {count}</div>
        <Space>
          <Button
            type="primary"
            onClick={() => {
              setCount((prev) => prev + 1, (latest) => {
                console.log('updater + callback, latest:', latest);
              });
            }}
          >
            +1
          </Button>
          <Button
            onClick={() => {
              setCount(0, (latest) => {
                console.log('reset + callback, latest:', latest);
              });
            }}
          >
            重置
          </Button>
          <Button
            onClick={() => {
              setCount((prev) => prev + 1);
              setCount((prev) => prev + 1, (latest) => {
                console.log('batch callback 1, latest:', latest);
              });
              setCount((prev) => prev + 1, (latest) => {
                console.log('batch callback 2, latest:', latest);
              });
            }}
          >
            连续 +3
          </Button>
        </Space>
      </Space>
    </div>
  );
};

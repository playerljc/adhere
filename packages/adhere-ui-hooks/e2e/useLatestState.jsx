import { Button } from 'antd';
import React from 'react';

import Hooks from '../src';

const { useLatestState } = Hooks;

/**
 * useLatestState
 * @description 返回最新 state 的 ref，避免闭包陈旧值
 */
export default () => {
  const [valueRef, setValue] = useLatestState(0);

  return (
    <div style={{ padding: 24 }}>
      <p>valueRef.current：{valueRef.current}</p>
      <Button
        type="primary"
        style={{ marginRight: 8 }}
        onClick={() => {
          setValue((prev) => prev + 1);
          setTimeout(() => {
            alert(`latest: ${valueRef.current}`);
          }, 0);
        }}
      >
        +1 并读取 latest
      </Button>
      <Button onClick={() => setValue(0)}>重置</Button>
    </div>
  );
};

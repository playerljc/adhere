import { Button, Space } from 'antd';
import React, { useState } from 'react';

import Hooks from '../src';

const { usePrevious } = Hooks;

/**
 * usePrevious
 * @description 获取上一次渲染的值
 */
export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>当前值：{count}</p>
      <p>上一次：{previous === undefined ? 'undefined' : previous}</p>
      <Space>
        <Button type="primary" onClick={() => setCount((c) => c + 1)}>
          +1
        </Button>
        <Button onClick={() => setCount(0)}>重置</Button>
      </Space>
    </div>
  );
};

import { Button } from 'antd';
import React, { useRef } from 'react';

import Hooks from '../src';

const { useForceUpdate } = Hooks;

/**
 * useForceUpdate
 * @description 强制组件重新渲染
 */
export default () => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  const forceUpdate = useForceUpdate();

  return (
    <div style={{ padding: 24 }}>
      <p>渲染次数：{renderCount.current}</p>
      <Button type="primary" onClick={() => forceUpdate()}>
        forceUpdate
      </Button>
    </div>
  );
};

import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';

import Hooks from '../src';

const { usePropToState } = Hooks;

function Inner({ propValue }) {
  const [value, setValue] = usePropToState(propValue);

  return (
    <Space>
      <span>内部 state：</span>
      <Input value={value} onChange={(e) => setValue(e.target.value)} style={{ width: 200 }} />
    </Space>
  );
}

/**
 * usePropToState
 * @description props 同步到 state，并可在内部修改
 */
export default () => {
  const [propValue, setPropValue] = useState('from-props');

  return (
    <div style={{ padding: 24, lineHeight: 2 }}>
      <Space>
        <span>外部 props：</span>
        <Input value={propValue} onChange={(e) => setPropValue(e.target.value)} style={{ width: 200 }} />
        <Button onClick={() => setPropValue(`props-${Date.now()}`)}>更新 props</Button>
      </Space>
      <div style={{ marginTop: 16 }}>
        <Inner propValue={propValue} />
      </div>
    </div>
  );
};

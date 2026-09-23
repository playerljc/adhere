import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';

import Hooks from '../src';

const { usePropToState } = Hooks;

function isShallowEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((key) => Object.is(a[key], b[key]));
}

function Inner({ propValue }) {
  const [value, setValue] = usePropToState(propValue);

  return (
    <Space>
      <span>内部 state：</span>
      <Input value={value} onChange={(e) => setValue(e.target.value)} style={{ width: 200 }} />
    </Space>
  );
}

function ObjectInner({ propValue }) {
  const [value, setValue] = usePropToState(propValue, { isEqual: isShallowEqual });

  return (
    <Space>
      <span>内部 name：</span>
      <Input
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
        style={{ width: 200 }}
      />
      <span>age: {value.age}</span>
    </Space>
  );
}

/**
 * usePropToState
 * @description props 同步到 state，并可在内部修改；支持 isEqual 避免引用变化误覆盖
 */
export default () => {
  const [propValue, setPropValue] = useState('from-props');
  const [propObj, setPropObj] = useState({ name: 'Tom', age: 18 });

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

      <div style={{ marginTop: 32 }}>
        <Space>
          <span>外部对象 props：</span>
          <Input
            value={propObj.name}
            onChange={(e) => setPropObj({ ...propObj, name: e.target.value })}
            style={{ width: 200 }}
          />
          <Button onClick={() => setPropObj({ ...propObj, age: propObj.age + 1 })}>age+1（内容变）</Button>
          <Button onClick={() => setPropObj({ name: propObj.name, age: propObj.age })}>
            同内容新引用（不应覆盖本地）
          </Button>
        </Space>
        <div style={{ marginTop: 16 }}>
          <ObjectInner propValue={propObj} />
        </div>
      </div>
    </div>
  );
};

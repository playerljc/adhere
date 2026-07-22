import React, { useState } from 'react';

import Button from '../../src/button';
import Space from '../../src/space';
import Select from '../../src/select/index';

const options = [
  {
    label: '男',
    value: '2',
  },
  {
    label: '女',
    value: '1',
  },
];

export default () => {
  const [value, setValue] = useState('invalid');

  return (
    <Space direction="vertical" size={16}>
      <div>
        <div style={{ marginBottom: 8 }}>isHideInvalidValue=true（无效值会被隐藏）</div>
        <Select
          style={{ width: 240 }}
          placeholder="SelectHideInvalidValue"
          options={options}
          value={value}
          onChange={setValue}
          isHideInvalidValue
        />
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>当前 value: {String(value)}</div>
        <Space>
          <Button type="primary" onClick={() => setValue('invalid')}>
            设为无效值
          </Button>
          <Button onClick={() => setValue('1')}>设为女</Button>
        </Space>
      </div>
    </Space>
  );
};

import React, { useState } from 'react';

import Button from '../../src/button';
import Cascader from '../../src/cascader';
import Space from '../../src/space';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState(['invalid', 'path']);

  return (
    <Space direction="vertical" size={16}>
      <div>
        <div style={{ marginBottom: 8 }}>isHideInvalidValue=true（无效路径会被隐藏）</div>
        <Cascader
          style={{ width: 300 }}
          placeholder="CascaderHideInvalidValue"
          options={options}
          value={value}
          onChange={setValue}
          isHideInvalidValue
        />
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>当前 value: {JSON.stringify(value)}</div>
        <Space>
          <Button type="primary" onClick={() => setValue(['invalid', 'path'])}>
            设为无效值
          </Button>
          <Button onClick={() => setValue(['zhejiang', 'hangzhou', 'xihu'])}>设为西湖</Button>
        </Space>
      </div>
    </Space>
  );
};

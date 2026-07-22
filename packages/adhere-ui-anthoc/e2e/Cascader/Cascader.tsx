import React, { useState } from 'react';

import Cascader from '../../src/cascader';

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
  const [value, setValue] = useState(['zhejiang', 'hangzhou', 'xihu']);

  return (
    <Cascader
      style={{ width: 300 }}
      placeholder="Cascader"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

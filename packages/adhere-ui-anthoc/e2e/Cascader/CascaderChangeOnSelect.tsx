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
  const [value, setValue] = useState(['zhejiang', 'hangzhou']);

  return (
    <Cascader.CascaderChangeOnSelect
      style={{ width: 300 }}
      placeholder="CascaderChangeOnSelect"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

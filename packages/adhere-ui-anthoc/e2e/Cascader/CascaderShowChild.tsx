import React, { useState } from 'react';

import Cascader from '../../src/cascader';

const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Cascader.CascaderShowChild
      style={{ width: 300 }}
      placeholder="CascaderShowChild"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

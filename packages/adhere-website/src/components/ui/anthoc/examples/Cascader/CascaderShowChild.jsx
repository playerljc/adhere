import React from 'react';

import { Cascader } from '@baifendian/adhere-ui-anthoc';

export default () => {
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

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Cascader.CascaderShowChild
      style={{ width: 300 }}
      placeholder="Please select"
      options={options}
      onChange={onChange}
    />
  );
};

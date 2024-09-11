import React from 'react';

import Radio from '../../src/radio';

export default () => (
  <Radio.VerticalRadio
    options={[
      {
        label: '男',
        value: 2,
      },
      {
        label: '女',
        value: 1,
      },
    ]}
  />
);

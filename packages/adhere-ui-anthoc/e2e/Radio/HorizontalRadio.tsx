import React from 'react';

import Radio from '../../src/radio';

export default () => (
  <Radio.HorizontalRadio
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

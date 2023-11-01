import React from 'react';

import Checkbox from '../../src/checkbox';

export default () => (
  <Checkbox.VerticalCheckbox
    onChange={(v) => {
      console.log('v', v);
    }}
    disabled
    options={[
      {
        label: '男',
        value: '2',
        disabled: false,
      },
      {
        label: '女',
        value: '1',
      },
    ]}
  />
);

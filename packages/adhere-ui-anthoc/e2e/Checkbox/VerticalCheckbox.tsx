import React from 'react';

import Checkbox from '../../src/checkbox';

export default () => (
  <Checkbox.VerticalCheckbox
    options={[
      {
        label: '男',
        value: '2',
      },
      {
        label: '女',
        value: '1',
      },
    ]}
  />
);

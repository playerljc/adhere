import React from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';

export default () => (
  <Checkbox.HorizontalCheckbox
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

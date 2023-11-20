import React from 'react';

import { Select } from '@baifendian/adhere-ui-anthoc';

export default () => {
  return (
    <Select
      placeholder="Select"
      style={{ width: 200 }}
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
};

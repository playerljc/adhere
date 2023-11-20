import React from 'react';

import { MultipleSelect } from '@baifendian/adhere-ui-anthoc';

export default () => {
  return (
    <MultipleSelect
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

import React from 'react';

import Select from '../../src/select/index';

export default () => {
  return (
    <Select
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

import React, { useState } from 'react';

import Select from '../../src/select/index';

export default () => {
  const [value, setValue] = useState('2');

  return (
    <Select
      style={{ width: 200 }}
      placeholder="Select"
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
      value={value}
      onChange={setValue}
    />
  );
};

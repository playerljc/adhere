import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.VerticalCheckAllCheckbox
      value={value}
      onChange={setValue}
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
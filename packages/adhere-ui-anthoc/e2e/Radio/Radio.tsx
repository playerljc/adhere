import React, { useState } from 'react';

import Radio from '../../src/radio';

export default () => {
  const [value, setValue] = useState(2);

  return (
    <Radio.Group
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
};

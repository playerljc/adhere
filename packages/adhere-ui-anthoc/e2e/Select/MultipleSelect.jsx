import React, { useState } from 'react';

import MultipleSelect from '../../src/multiple-select/index';

export default () => {
  const [value, setValue] = useState(['2']);

  return (
    <MultipleSelect
      style={{ width: 200 }}
      placeholder="MultipleSelect"
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

import React, { useState } from 'react';

import Select from '../../src/select/index';

export default () => {
  const [value, setValue] = useState('2');

  const [options, setOptions] = useState([
    {
      label: '男',
      value: '2',
      id: '2',
    },
    {
      label: '女',
      value: '1',
    },
  ]);

  return <Select style={{ width: 200 }} options={options} value={value} onChange={setValue} />;
};

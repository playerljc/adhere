import React, { useState } from 'react';

import Select from '../../src/select/index';

export default () => {
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

  return (
    <div>
      <button
        onClick={() => {
          setOptions([
            {
              label: '我',
              value: '3',
            },
          ]);
        }}
      >
        1
      </button>
      <Select style={{ width: 200 }} options={options} />
    </div>
  );
};

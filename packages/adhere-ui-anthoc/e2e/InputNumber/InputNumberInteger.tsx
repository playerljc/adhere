import React, { useState } from 'react';

import InputNumberInteger from '../../src/input-number-integer';
import Space from '../../src/space';

export default () => {
  const [value, setValue] = useState(0);

  return (
    <Space orientation="vertical" size={8}>
      <InputNumberInteger
        style={{ width: 200 }}
        placeholder="InputNumberInteger"
        value={value}
        onChange={setValue}
      />
      <div>当前 value: {String(value)}</div>
    </Space>
  );
};

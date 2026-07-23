import React, { useState } from 'react';

import InputNumberInteger from '../../src/input-number-integer';
import Space from '../../src/space';

export default () => {
  const [value, setValue] = useState(0);

  return (
    <Space orientation="vertical" size={8}>
      <InputNumberInteger.InputPositiveNumberInteger
        style={{ width: 200 }}
        placeholder="InputPositiveNumberInteger"
        value={value}
        onChange={setValue}
      />
      <div>当前 value: {String(value)}（min=0, precision=0）</div>
    </Space>
  );
};

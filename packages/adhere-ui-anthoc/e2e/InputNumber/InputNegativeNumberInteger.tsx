import React, { useState } from 'react';

import InputNumberInteger from '../../src/input-number-integer';
import Space from '../../src/space';

export default () => {
  const [value, setValue] = useState(0);

  return (
    <Space direction="vertical" size={8}>
      <InputNumberInteger.InputNegativeNumberInteger
        style={{ width: 200 }}
        placeholder="InputNegativeNumberInteger"
        value={value}
        onChange={setValue}
      />
      <div>当前 value: {String(value)}（max=0, precision=0）</div>
    </Space>
  );
};

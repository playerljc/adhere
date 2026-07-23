import React, { useState } from 'react';

import InputNumberDecimal2 from '../../src/input-number-decimal2';
import Space from '../../src/space';

export default () => {
  const [value, setValue] = useState(0);

  return (
    <Space orientation="vertical" size={8}>
      <InputNumberDecimal2
        style={{ width: 200 }}
        placeholder="InputNumberDecimal2"
        value={value}
        onChange={setValue}
      />
      <div>当前 value: {String(value)}</div>
    </Space>
  );
};

import React, { useState } from 'react';

import InputNumberDecimal1 from '../../src/input-number-decimal1';
import Space from '../../src/space';

export default () => {
  const [value, setValue] = useState(0);

  return (
    <Space direction="vertical" size={8}>
      <InputNumberDecimal1.InputPositiveNumberDecimal1
        style={{ width: 200 }}
        placeholder="InputPositiveNumberDecimal1"
        value={value}
        onChange={setValue}
      />
      <div>当前 value: {String(value)}（min=0, precision=1）</div>
    </Space>
  );
};

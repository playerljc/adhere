import React, { useState } from 'react';

import { Input } from '../../src';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <div style={{ padding: 20 }}>
      <Input
        placeholder="请输入"
        value={value}
        onChange={setValue}
        clearable
      />
      <div style={{ marginTop: 12 }}>value: {String(value ?? '')}</div>
    </div>
  );
};

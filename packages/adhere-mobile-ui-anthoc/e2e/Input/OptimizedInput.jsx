import React, { useState } from 'react';

import { Input } from '../../src';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <div style={{ padding: 20 }}>
      <Input.OptimizedInput
        placeholder="OptimizedInput"
        value={value}
        onChange={setValue}
        clearable
      />
      <div style={{ marginTop: 12 }}>value: {String(value ?? '')}</div>
    </div>
  );
};

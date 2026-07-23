import React, { useState } from 'react';

import { Input } from '../../src';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <div style={{ padding: 20 }}>
      <Input.OptimizedTextArea
        placeholder="OptimizedTextArea"
        value={value}
        onChange={setValue}
        rows={4}
      />
      <div style={{ marginTop: 12 }}>value: {String(value ?? '')}</div>
    </div>
  );
};

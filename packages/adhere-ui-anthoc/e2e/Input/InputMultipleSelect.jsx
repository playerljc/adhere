import React, { useState } from 'react';

import { InputMultiple } from '../../src';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <InputMultiple.Select
        value={value}
        onChange={setValue}
        isCheckAll
        // direction="vertical"
        selectProps={{
          style: { width: 300 },
        }}
      />
    </div>
  );
};

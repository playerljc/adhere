import React, { useState } from 'react';

import { InputMultiple } from '../../src';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <InputMultiple.Dialog
        value={value}
        onChange={setValue}
        options={['222']}
        isCheckAll
        isFilter
        selectorProps={{
          filterProps: {
            optionFilterProp: 'label',
          },
        }}
      />
    </div>
  );
};

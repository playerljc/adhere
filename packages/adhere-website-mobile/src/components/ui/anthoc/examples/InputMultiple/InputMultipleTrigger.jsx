import React, { useState } from 'react';

import { InputMultiple } from '@baifendian/adhere-mobile-ui-anthoc';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <InputMultiple.Dialog
        value={value}
        onChange={setValue}
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

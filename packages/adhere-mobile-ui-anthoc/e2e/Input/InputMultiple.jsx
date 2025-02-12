import React from 'react';

import { InputMultiple } from '../../src';

export default () => {
  return (
    <div style={{ padding: 20 }}>
      <InputMultiple
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

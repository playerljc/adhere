import React, { useState } from 'react';

import { InputMultiple } from '../../src';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <InputMultiple.Dialog
        value={value}
        onChange={setValue}
        options={['React', 'Vue', 'Angular']}
        isCheckAll
        isFilter
        selectorProps={{
          filterProps: {
            placeholder: '请输入关键字',
          },
        }}
      />
    </div>
  );
};

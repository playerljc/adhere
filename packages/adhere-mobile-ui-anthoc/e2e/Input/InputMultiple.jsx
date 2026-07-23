import React, { useState } from 'react';

import { InputMultiple } from '../../src';

import '../../src/index.less';

const options = [
  { label: 'React', value: 'React' },
  { label: 'Vue', value: 'Vue' },
  { label: 'Angular', value: 'Angular' },
];

export default () => {
  const [value, setValue] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <InputMultiple
        value={value}
        onChange={setValue}
        options={options}
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

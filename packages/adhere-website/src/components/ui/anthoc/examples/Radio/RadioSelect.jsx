import React, { useState } from 'react';

import { Radio } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Radio.RadioSelect
      placeholder="A-Z"
      style={{ width: 200 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
    />
  );
};

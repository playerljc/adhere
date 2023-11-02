import React, { useState } from 'react';

import Radio from '../../src/radio';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Radio.RadioSelect
      placeholder="A-Z"
      style={{ width: 200 }}
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

import React, { useState } from 'react';

import Radio from '../../src/radio';

export default () => {
  const [value, setValue] = useState('A');

  return (
    <Radio.ButtonRadio
      value={value}
      onChange={(e) => setValue(e.target.value)}
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

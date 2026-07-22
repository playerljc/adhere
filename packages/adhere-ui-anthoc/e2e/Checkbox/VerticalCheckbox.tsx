import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';

export default () => {
  const [value, setValue] = useState(['A']);

  return (
    <Checkbox.VerticalCheckbox
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

import React, { useState } from 'react';

import AutoComplete from '../../src/auto-complete';

export default () => {
  const [value, setValue] = useState({
    inputValue: '',
    selectValue: '',
  });

  return (
    <AutoComplete.AutoCompleteSelectInput
      placeholder="control mode"
      style={{ width: 200 }}
      value={value}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: `${97 + _index}`,
        };
      })}
      onChange={setValue}
    />
  );
};

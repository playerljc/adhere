import React, { useState } from 'react';

import Radio from '../../src/radio';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Radio.ButtonRadioSelect
      style={{ width: 300 }}
      placeholder="ButtonRadioSelect"
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      radioProps={{}}
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

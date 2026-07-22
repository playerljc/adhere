import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import MultipleSelect from '../../src/multiple-select/index';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <MultipleSelect.CheckAllSelect
      placeholder="CheckAllMultipleSelect custom children"
      value={value}
      onChange={setValue}
      style={{ width: 200 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
    >
      {({ value: selectedValue, onChange, options }) => {
        return <Checkbox.Group value={selectedValue} onChange={onChange} options={options} />;
      }}
    </MultipleSelect.CheckAllSelect>
  );
};

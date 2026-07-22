import React, { useState } from 'react';

import Radio from '../../src/radio';
import Select from '../../src/select/index';

export default () => {
  const [value, setValue] = useState();

  return (
    <Select.DropdownRenderSelect
      placeholder="DropdownRenderSelect single"
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
        return (
          <Radio.Group
            value={selectedValue}
            onChange={(e) => onChange?.(e.target.value)}
            options={options}
          />
        );
      }}
    </Select.DropdownRenderSelect>
  );
};

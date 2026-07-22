import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import MultipleSelect from '../../src/multiple-select/index';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <MultipleSelect.CheckAllSelect
      placeholder="CheckAllMultipleSelect custom render"
      value={value}
      onChange={setValue}
      style={{ width: 300 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
      render={(checkAllOrigin, childrenOrigin) => {
        return (
          <div>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
              {checkAllOrigin}
            </div>
            <div style={{ padding: 12 }}>{childrenOrigin}</div>
          </div>
        );
      }}
    >
      {({ value: selectedValue, onChange, options }) => {
        return <Checkbox.Group value={selectedValue} onChange={onChange} options={options} />;
      }}
    </MultipleSelect.CheckAllSelect>
  );
};

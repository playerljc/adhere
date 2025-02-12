import React, { useState } from 'react';

import { Checkbox } from '@baifendian/adhere-mobile-ui-anthoc';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    title: letter,
    value: letter,
    children: letter,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.CheckAllCheckbox
      spaceStyle={{ '--gap': '24px' }}
      checkAllBodyWrapperStyle={{ padding: 15, paddingTop: 0 }}
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
      options={options}
      checkAllLabel={(_value) => (
        <div>
          <span>{!!_value.length ? `(${_value.length})` : null}</span>
          <span>全选</span>
        </div>
      )}
    />
  );
};

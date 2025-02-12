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
    <Checkbox.FilterCheckAllCheckbox
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      checkAllBodyWrapperStyle={{ padding: 15, paddingTop: 0 }}
      checkAllWrapperStyle={{ paddingTop: 0 }}
      spaceStyle={{ '--gap': '24px' }}
      value={value}
      options={options}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};

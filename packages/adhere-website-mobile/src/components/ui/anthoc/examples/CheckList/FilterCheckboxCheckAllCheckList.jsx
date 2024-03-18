import React, { useState } from 'react';

import { CheckList } from '@baifendian/adhere-mobile-ui-anthoc';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    title: letter,
    value: letter,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.FilterCheckboxCheckAllCheckList
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};

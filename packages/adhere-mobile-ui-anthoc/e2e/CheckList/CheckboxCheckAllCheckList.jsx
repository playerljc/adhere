import React, { useState } from 'react';

import { CheckList } from '../../src/index';

import '../../src/index.less';

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
    <CheckList.CheckboxCheckAllCheckList
      options={options}
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};
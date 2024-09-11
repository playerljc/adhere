import React, { useState } from 'react';

import { Selector } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
    description: letter,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Selector.FilterCheckAllSelector
      filterProps={{ placeholder: '请输入关键字', optionFilterProp: 'label' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      checkAllBodyWrapperStyle={{ padding: 15, paddingTop: 0 }}
      checkAllWrapperStyle={{ paddingTop: 0 }}
      multiple
      columns={2}
      options={options}
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};

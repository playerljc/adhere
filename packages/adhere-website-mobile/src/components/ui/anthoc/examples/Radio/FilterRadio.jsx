import React from 'react';

import { Radio } from '@baifendian/adhere-mobile-ui-anthoc';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    title: letter,
    value: letter,
    children: letter,
  };
});

export default () => {
  return (
    <Radio.FilterRadio
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto', padding: 20, paddingTop: 0 }}
      spaceStyle={{ '--gap': '24px' }}
      options={options}
    />
  );
};

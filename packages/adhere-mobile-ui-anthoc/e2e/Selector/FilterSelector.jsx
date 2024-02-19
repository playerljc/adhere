import React from 'react';

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
  return (
    <Selector.FilterSelector
      filterProps={{ placeholder: '请输入关键字', optionFilterProp: 'label' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto', padding: 20, paddingTop: 0 }}
      // showCheckMark={false}
      multiple
      columns={2}
      options={options}
    />
  );
};

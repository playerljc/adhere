import React from 'react';

import { Radio } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 100 }).map((t, _index) => {
  return {
    title: `${_index + 1}`,
    value: _index + 1,
    children: `${_index + 1}`,
  };
});

const defaultPaging = {
  limit: 20,
};

export default () => {
  return (
    <Radio.PagingRadio
      options={options}
      spaceStyle={{ '--gap': '23px' }}
      pagingProps={{
        style: { height: '100%', padding: 20 },
        defaultPaging,
      }}
    />
  );
};

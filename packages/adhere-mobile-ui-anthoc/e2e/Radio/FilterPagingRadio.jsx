import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { Radio } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = Mockjs.mock('@name');

  return {
    value,
    title,
    children: title,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Radio.FilterPagingRadio
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      spaceStyle={{ '--gap': '23px' }}
      value={value}
      options={options}
      onChange={setValue}
      pagingProps={{
        style: { height: '100%', padding: '0 20px' },
      }}
    />
  );
};

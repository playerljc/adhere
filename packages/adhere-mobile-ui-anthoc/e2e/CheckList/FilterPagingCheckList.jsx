import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = Mockjs.mock('@name');

  return {
    value,
    title,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.FilterPagingCheckList
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      value={value}
      options={options}
      onChange={setValue}
      multiple
      pagingProps={{
        style: { height: '100%' },
      }}
    />
  );
};

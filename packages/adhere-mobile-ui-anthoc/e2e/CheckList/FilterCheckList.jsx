import React, { useState } from 'react';

import { CheckList } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.FilterCheckList
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      value={value}
      options={letterOptions}
      onChange={setValue}
    />
  );
};

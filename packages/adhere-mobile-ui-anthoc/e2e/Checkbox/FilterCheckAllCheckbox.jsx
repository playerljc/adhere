import React, { useState } from 'react';

import { Checkbox } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

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
      options={letterOptions}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};

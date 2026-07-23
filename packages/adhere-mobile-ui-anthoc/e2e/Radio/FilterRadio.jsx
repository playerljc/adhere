import React, { useState } from 'react';

import { Radio } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Radio.FilterRadio
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto', padding: 20, paddingTop: 0 }}
      spaceStyle={{ '--gap': '24px' }}
      options={letterOptions}
      value={value}
      onChange={setValue}
    />
  );
};

import React, { useState } from 'react';

import { Selector } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Selector.FilterSelector
      filterProps={{ placeholder: '请输入关键字', optionFilterProp: 'label' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto', padding: 20, paddingTop: 0 }}
      multiple
      columns={2}
      options={letterOptions}
      value={value}
      onChange={setValue}
    />
  );
};

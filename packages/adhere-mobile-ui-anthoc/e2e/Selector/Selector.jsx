import React, { useState } from 'react';

import { Selector } from '../../src/index';
import { letterOptions, selectorStyle } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Selector
      style={selectorStyle}
      showCheckMark={false}
      multiple
      columns={2}
      options={letterOptions}
      value={value}
      onChange={setValue}
    />
  );
};

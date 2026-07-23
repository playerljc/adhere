import React, { useState } from 'react';

import { Checkbox } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.CheckboxGroup
      options={letterOptions}
      spaceStyle={{ '--gap': '24px' }}
      value={value}
      onChange={setValue}
    />
  );
};

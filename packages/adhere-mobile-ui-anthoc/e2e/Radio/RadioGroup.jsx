import React, { useState } from 'react';

import { Radio } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Radio.RadioGroup
      options={letterOptions}
      spaceStyle={{ '--gap': '24px' }}
      value={value}
      onChange={setValue}
    />
  );
};

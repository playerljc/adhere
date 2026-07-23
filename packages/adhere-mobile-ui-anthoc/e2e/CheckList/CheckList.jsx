import React, { useState } from 'react';

import { CheckList } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return <CheckList options={letterOptions} value={value} onChange={setValue} multiple />;
};

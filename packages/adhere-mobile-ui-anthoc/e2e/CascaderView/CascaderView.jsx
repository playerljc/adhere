import React, { useState } from 'react';

import { CascaderView } from '../../src/index';
import { options } from './options';

export default () => {
  const [value, setValue] = useState([]);

  return <CascaderView options={options} value={value} onChange={setValue} />;
};

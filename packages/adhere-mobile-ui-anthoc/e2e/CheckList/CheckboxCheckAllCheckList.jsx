import React, { useState } from 'react';

import { CheckList } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.CheckboxCheckAllCheckList
      value={value}
      options={letterOptions}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};

import React, { useState } from 'react';

import { Checkbox } from '../../src/index';
import { pagingOptions } from './options';

import '../../src/index.less';

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.PagingCheckbox
      options={pagingOptions}
      spaceStyle={{ '--gap': '23px' }}
      value={value}
      onChange={setValue}
      pagingProps={{
        style: { height: '100%', padding: 20 },
        defaultPaging,
      }}
    />
  );
};

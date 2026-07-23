import React, { useState } from 'react';

import { Radio } from '../../src/index';
import { defaultPaging, pagingOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Radio.PagingRadio
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

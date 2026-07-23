import React, { useState } from 'react';

import { Selector } from '../../src/index';
import { defaultPaging, pagingOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Selector.PagingSelector
      multiple
      columns={2}
      options={pagingOptions}
      value={value}
      onChange={setValue}
      pagingProps={{
        style: { height: '100%', padding: 20 },
        defaultPaging,
      }}
    />
  );
};

import React, { useState } from 'react';

import { CheckList } from '../../src/index';
import { defaultPaging, pagingOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.PagingCheckList
      value={value}
      onChange={setValue}
      multiple
      pagingProps={{
        style: { height: 300 },
        defaultPaging,
        isLocal: false,
        onLoad: (page, limit) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                data: pagingOptions.slice((page - 1) * limit, page * limit),
                total: pagingOptions.length,
              });
            }, 1000);
          });
        },
      }}
    />
  );
};

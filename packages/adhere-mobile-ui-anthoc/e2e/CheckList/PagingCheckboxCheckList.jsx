// import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { ArrayEntityValueHOC, PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

// import Mock from '@baifendian/adhere-mock';
import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 100 }).map((t, _index) => {
  return {
    title: `${_index + 1}`,
    value: _index + 1,
  };
});

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState([]);

  return (
    <PagingEntityValueHOC onChange={setValue} value={value}>
      <CheckList.PagingCheckboxCheckList
        multiple
        // onChange={(v) => {
        //   setValue(v);
        // }}
        pagingProps={{
          style: { height: 300 },
          defaultPaging,
          isLocal: false,
          onLoad: (page, limit) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({
                  data: options.slice((page - 1) * limit, page * limit),
                  total: options.length,
                });
              }, 1000);
            });
          },
        }}
      />
    </PagingEntityValueHOC>
  );
};

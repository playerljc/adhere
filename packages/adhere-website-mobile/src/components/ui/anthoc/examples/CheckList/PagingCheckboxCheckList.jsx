// import Mockjs from 'mockjs';
import React, { useState } from 'react';

// import Mock from '@baifendian/adhere-mock';
import { CheckList } from '@baifendian/adhere-mobile-ui-anthoc';

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
    <CheckList.PagingCheckboxCheckList
      multiple
      value={value}
      onChange={setValue}
      pagingProps={{
        style: { height: '100%' },
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
  );
};

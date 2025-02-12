import React from 'react';

import { Checkbox } from '@baifendian/adhere-mobile-ui-anthoc';

const options = Array.from({ length: 100 }).map((t, _index) => {
  return {
    title: `${_index + 1}`,
    value: _index + 1,
    children: `${_index + 1}`,
  };
});

const defaultPaging = {
  limit: 20,
};

export default () => {
  return (
    <Checkbox.PagingCheckbox
      options={options}
      spaceStyle={{ '--gap': '23px' }}
      pagingProps={{
        style: { height: '100%', padding: 20 },
        defaultPaging,
      }}
    />
  );
};

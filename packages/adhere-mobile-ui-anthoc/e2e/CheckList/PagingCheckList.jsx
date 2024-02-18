// import Mockjs from 'mockjs';
import React from 'react';

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
  return (
    <CheckList.PagingCheckList
      options={options}
      multiple
      pagingProps={{
        style: { height: '100%' },
        defaultPaging,
      }}
    />
  );
};

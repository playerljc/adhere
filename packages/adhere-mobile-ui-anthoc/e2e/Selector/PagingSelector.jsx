import React from 'react';

import { Selector } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 1000 }).map((t, _index) => {
  return {
    label: `${_index + 1}`,
    value: _index + 1,
    description: `${_index + 1}`,
  };
});

const defaultPaging = {
  limit: 40,
};

export default () => {
  return (
    <Selector.PagingSelector
      // style={{
      //   '--border-radius': '100px',
      //   '--border': 'solid transparent 1px',
      //   '--checked-border': 'solid var(--adm-color-primary) 1px',
      //   '--padding': '8px 24px',
      // }}
      // showCheckMark={false}
      multiple
      columns={2}
      options={options}
      pagingProps={{
        style: { height: '100%', padding: 20 },
        defaultPaging,
      }}
    />
  );
};

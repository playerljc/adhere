import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { Selector } from '@baifendian/adhere-mobile-ui-anthoc';

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = Mockjs.mock('@name');

  return {
    label: title,
    value,
    description: title,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Selector.FilterPagingSelector
      filterProps={{ placeholder: '请输入关键字', optionFilterProp: 'label' }}
      style={{
        height: '100%',
        '--border-radius': '100px',
        '--border': 'solid transparent 1px',
        '--checked-border': 'solid var(--adm-color-primary) 1px',
        '--padding': '8px 24px',
      }}
      showCheckMark={false}
      multiple
      columns={2}
      value={value}
      options={options}
      onChange={setValue}
      pagingProps={{
        style: { height: '100%', padding: 20 },
      }}
    />
  );
};

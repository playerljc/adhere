import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { Selector } from '../../src/index';
import { selectorStyle } from './options';

import '../../src/index.less';

const options = Array.from({ length: 1000 }).map(() => {
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
        ...selectorStyle,
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

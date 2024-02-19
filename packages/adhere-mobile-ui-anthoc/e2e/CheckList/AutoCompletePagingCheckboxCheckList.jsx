import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = `${Mockjs.mock('@name')}1`;

  return {
    value,
    title,
    id: value,
  };
});

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <CheckList.AutoCompletePagingCheckboxCheckList
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      bodyStyle={{ overflowY: 'hidden' }}
      value={value}
      loadData={(_kw) => {
        if (!_kw) {
          setSearchDataSource([]);
          return;
        }

        const handler = MobileGlobalIndicator.show();

        setTimeout(() => {
          setSearchDataSource(options.filter((_option) => _option.title.indexOf(_kw) !== -1));

          MobileGlobalIndicator.hide(handler);
        }, 500);
      }}
      onChange={(_value) => {
        setValue(_value);
      }}
      searchDataSource={searchDataSource}
      pagingCheckboxCheckListProps={{
        multiple: true,
        pagingProps: {
          style: { height: '100%' },
        },
      }}
    />
  );
};

import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';

import { Selector } from '../../src/index';

import '../../src/index.less';

const { Book } = Mock;

const book = Book.map((t) => {
  const id = Mockjs.mock('@guid');

  return {
    ...t,
    label: t.t,
    value: id,
    description: t.t,
    id,
  };
});

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = `${Mockjs.mock('@name')}1`;

  return {
    value,
    label: title,
    description: title,
    id: value,
  };
});

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <Selector.AutoCompletePagingSelector
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
          setSearchDataSource(options.filter((_option) => _option.label.indexOf(_kw) !== -1));

          MobileGlobalIndicator.hide(handler);
        }, 500);
      }}
      onChange={(_value) => {
        setValue(_value);
      }}
      searchDataSource={searchDataSource}
      pagingSelectorProps={{
        multiple: true,
        columns: 2,
        showCheckMark: true,
        pagingProps: {
          style: { height: '100%' },
        },
      }}
    />
  );
};

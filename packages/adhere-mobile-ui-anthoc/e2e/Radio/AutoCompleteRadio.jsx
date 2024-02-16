import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';

import { Radio } from '../../src/index';

import '../../src/index.less';

const { Book } = Mock;

const book = Book.map((t) => {
  const id = Mockjs.mock('@guid');

  return {
    ...t,
    value: id,
    title: t.t,
    children: t.t,
    id,
  };
});

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <Radio.AutoCompleteRadio
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      value={value}
      loadData={(_kw) => {
        if (!_kw) {
          setSearchDataSource([]);
          return;
        }

        const handler = MobileGlobalIndicator.show();

        setTimeout(() => {
          setSearchDataSource(book.filter((_book) => _book.t.indexOf(_kw) !== -1));

          MobileGlobalIndicator.hide(handler);
        }, 500);
      }}
      onChange={(_value) => {
        setValue(_value);
      }}
      searchDataSource={searchDataSource}
    />
  );
};

import React, { useState } from 'react';

import GlobalIndicator from '@baifendian/adhere-mobile-ui-globalindicator';

import MobileAutoComplete from '../src';
import Book from './data';

import '../src/index.less';

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <MobileAutoComplete
      style={{ height: '100%' }}
      onChange={(_value) => {
        setValue(_value);
      }}
      value={value}
      loadData={(_kw) => {
        if (!_kw) {
          setSearchDataSource([]);
          return;
        }

        const handler = GlobalIndicator.show();

        setTimeout(() => {
          setSearchDataSource(Book.filter((_book) => _book.t.indexOf(_kw) !== -1));

          GlobalIndicator.hide(handler);
        }, 500);
      }}
      checkListProps={{
        multiple: true,
      }}
      searchDataSource={searchDataSource}
    />
  );
};

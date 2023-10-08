import React, { useState } from 'react';

import { MobileAutoComplete, MobileGlobalIndicator } from '@baifendian/adhere';

import Book from '@/data';

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <MobileAutoComplete
      style={{ height: 500 }}
      onChange={(_value) => {
        setValue(_value);
      }}
      value={value}
      loadData={(_kw) => {
        if (!_kw) {
          setSearchDataSource([]);
          return;
        }

        const handler = MobileGlobalIndicator.show();

        setTimeout(() => {
          setSearchDataSource(Book.filter((_book) => _book.t.indexOf(_kw) !== -1));

          MobileGlobalIndicator.hide(handler);
        }, 500);
      }}
      checkListProps={{
        multiple: true,
      }}
      searchDataSource={searchDataSource}
    />
  );
};

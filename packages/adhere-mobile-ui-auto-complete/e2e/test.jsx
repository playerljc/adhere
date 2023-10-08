import { CheckList, Image } from 'antd-mobile';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
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
      onChange={(_value) => {
        setValue(_value);
      }}
      checkListProps={{
        multiple: true,
      }}
      searchDataSource={searchDataSource}
      renderItem={(record) => ({
        description: record.label,
        prefix: (
          <Image
            src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            style={{ borderRadius: 20 }}
            fit="cover"
            width={40}
            height={40}
          />
        ),
        children: record.t,
      })}
      renderResultItem={(record) => (
        <CheckList>
          <CheckList.Item
            prefix={
              <Image
                src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={record.label}
          >
            {record.t}
          </CheckList.Item>
        </CheckList>
      )}
    />
  );
};

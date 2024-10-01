import { CheckList, Image, List } from 'antd-mobile';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';

import MobileAutoComplete from '../src';
import Book from './data';

import '../src/index.less';

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([Book[0]]);

  return (
    <MobileAutoComplete
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
          setSearchDataSource(Book.filter((_book) => _book.t.indexOf(_kw) !== -1));

          MobileGlobalIndicator.hide(handler);
        }, 500);
      }}
      onChange={(_value) => {
        debugger;
        setValue(_value);
      }}
      searchDataSource={searchDataSource}
      renderResultItem={(record) => (
        <List>
          <List.Item
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
          </List.Item>
        </List>
      )}
    >
      {({ value: _value, onChange: _onChange, searchDataSource: _searchDataSource }) => (
        <CheckList multiple value={_value} onChange={_onChange}>
          {(_searchDataSource ?? []).map((_record, _index) => (
            <CheckList.Item
              key={_record.id}
              value={_record.id}
              description={_record.label}
              prefix={
                <Image
                  src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={40}
                  height={40}
                />
              }
            >
              {_record.t}
            </CheckList.Item>
          ))}
        </CheckList>
      )}
    </MobileAutoComplete>
  );
};

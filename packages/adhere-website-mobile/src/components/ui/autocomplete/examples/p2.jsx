import { CheckList, Image } from 'antd-mobile';
import React, { useState } from 'react';

import { MobileAutoComplete, MobileGlobalIndicator } from '@baifendian/adhere';

import Book from '@/data';

import styles from './examples.less';

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <MobileAutoComplete
      className={styles.Wrapper}
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
      searchDataSource={searchDataSource}
      renderItem={(record) => ({
        description: record.label,
        prefix: (
          <Image
            src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            fit="cover"
            className={styles.Image}
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
                className={styles.Image}
                fit="cover"
              />
            }
            description={record.label}
          >
            {record.t}
          </CheckList.Item>
        </CheckList>
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
                  className={styles.Image}
                  fit="cover"
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

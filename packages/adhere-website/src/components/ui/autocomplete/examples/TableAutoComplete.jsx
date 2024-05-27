import { Table } from 'antd';
import React, { useState } from 'react';

import { AutoComplete } from '@baifendian/adhere';

import Book from '../data';

import styles from '../../anthoc/examples/Cascader/index.less';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <AutoComplete
      placeholder="自动补全"
      value={value}
      mode="multiple"
      className={styles.Wrapper3}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setOptions([]);
            resolve();
            return;
          }

          setTimeout(() => {
            const result = Book.filter((_book) => _book.t.indexOf(_kw) !== -1).map((t) => ({
              label: t.t,
              value: t.id,
              ...t,
            }));

            setOptions(result);

            resolve();
          }, 500);
        });
      }}
      options={options}
      onChange={(_value) => {
        setValue(_value);
      }}
    >
      {({ value: _value, onChange: _onChange, options }) => {
        return (
          <Table
            columns={[
              {
                title: '名称',
                key: 'label',
                dataIndex: 'label',
              },
              {
                title: '出版社',
                key: 'label',
                dataIndex: 'label',
              },
            ]}
            scroll={{
              y: 200,
            }}
            rowKey="id"
            dataSource={options}
            pagination={false}
            rowSelection={{
              type: 'checkbox',
              selectedRowKeys: _value,
              onSelect: function (record, selected, selectedRows) {
                if (selected) {
                  const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                  _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                } else {
                  _onChange(_value.filter((t) => t !== record.id));
                }
              },
              onSelectAll: (selected, selectedRows, changeRows) => {
                if (selected) {
                  const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                  _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                } else {
                  const changeSelectedRowKeys = changeRows.filter((t) => !!t).map((t) => t.value);
                  _onChange(_value.filter((t) => !changeSelectedRowKeys.includes(t)));
                }
              },
            }}
          />
        );
      }}
    </AutoComplete>
  );
};

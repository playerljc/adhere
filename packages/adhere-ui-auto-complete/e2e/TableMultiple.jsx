import { Table } from 'antd';
import React, { useState } from 'react';

import AutoComplete from '../src/index';
import Book from './data';

import '../src/index.less';

export default () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState([]);

  return (
    <AutoComplete
      placeholder="请输入关键字"
      value={value}
      mode="multiple"
      style={{ width: 600 }}
      options={options}
      onChange={setValue}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setOptions([]);
            resolve();
            return;
          }

          setTimeout(() => {
            setOptions(
              Book.filter((_book) => _book.t.indexOf(_kw) !== -1).map((t) => ({
                label: t.t,
                value: t.id,
                ...t,
              })),
            );
            resolve();
          }, 500);
        });
      }}
    >
      {({ value: _value, onChange: _onChange, options: tableOptions, loading }) => (
        <Table
          loading={loading}
          columns={[
            {
              title: '名称',
              key: 'label',
              dataIndex: 'label',
            },
            {
              title: '出版社',
              key: 'publisher',
              dataIndex: 'publisher',
            },
          ]}
          scroll={{ y: 500 }}
          rowKey="id"
          dataSource={tableOptions}
          pagination={false}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: _value,
            onSelect: (record, selected, selectedRows) => {
              if (selected) {
                const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                _onChange(Array.from(new Set([...(_value ?? []), ...selectedRowKeys])));
              } else {
                _onChange((_value ?? []).filter((t) => t !== record.id));
              }
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
              if (selected) {
                const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                _onChange(Array.from(new Set([...(_value ?? []), ...selectedRowKeys])));
              } else {
                const changeSelectedRowKeys = changeRows.filter((t) => !!t).map((t) => t.value);
                _onChange((_value ?? []).filter((t) => !changeSelectedRowKeys.includes(t)));
              }
            },
          }}
        />
      )}
    </AutoComplete>
  );
};

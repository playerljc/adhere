import { Table } from 'antd';
import React, { useRef, useState } from 'react';

import AutoComplete from '../src/index';
import Book from './data';

import '../src/index.less';

export default () => {
  const [options, setOptions] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [value, setValue] = useState(undefined);
  const kw = useRef();
  const pagin = useRef({
    page: 1,
    limit: 10,
  });

  function loadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const all = Book.filter((_book) => _book.t.indexOf(kw.current) !== -1).map((t) => ({
          label: t.t,
          value: t.id,
          ...t,
        }));

        setTotalCount(all.length);
        setOptions(
          all.slice(
            (pagin.current.page - 1) * pagin.current.limit,
            pagin.current.page * pagin.current.limit,
          ),
        );
        resolve();
      }, 500);
    });
  }

  return (
    <AutoComplete
      placeholder="请输入关键字"
      value={value}
      style={{ width: 600 }}
      options={options}
      onChange={setValue}
      loadData={(_kw) => {
        kw.current = _kw;
        pagin.current = {
          page: 1,
          limit: 10,
        };

        if (!_kw) {
          setTotalCount(0);
          setOptions([]);
          return Promise.resolve();
        }

        return loadData();
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
          rowKey="id"
          dataSource={tableOptions}
          pagination={{
            current: pagin.current.page,
            pageSize: pagin.current.limit,
            total: totalCount,
            onChange: (page, pageSize) => {
              pagin.current = {
                page,
                limit: pageSize,
              };
              loadData();
            },
            onShowSizeChange: (current, size) => {
              pagin.current = {
                page: current,
                limit: size,
              };
              loadData();
            },
          }}
          scroll={{ y: 500 }}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: _value != null ? [_value] : [],
            onSelect: (record) => {
              _onChange(record.value);
            },
          }}
        />
      )}
    </AutoComplete>
  );
};

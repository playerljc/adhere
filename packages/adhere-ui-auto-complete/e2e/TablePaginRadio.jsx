import { Table } from 'antd';
import React, { useRef, useState } from 'react';

import AutoComplete from '../src/index';
import Book from './data';

import '../src/index.less';

export default () => {
  const [options, setOptions] = useState([]);

  const kw = useRef();

  const [totalCount, setTotalCount] = useState(0);

  const [value, setValue] = useState([]);

  const pagin = useRef({
    page: 1,
    limit: 10,
  });

  function loadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const all = [...Book]
          .filter((_book) => {
            return _book.t.indexOf(kw.current) !== -1;
          })
          .map((t) => ({
            label: t.t,
            value: t.id,
            ...t,
          }));

        const result = all.slice(
          (pagin.current.page - 1) * pagin.current.limit,
          pagin.current.page * pagin.current.limit,
        );

        setTotalCount(all.length);
        setOptions(result);

        resolve();
      }, 500);
    });
  }

  return (
    <AutoComplete
      value={value}
      style={{ width: 600 }}
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
      options={options}
      onChange={(_value) => {
        setValue(_value);
      }}
    >
      {({ value: _value, onChange: _onChange, options, loading }) => {
        return (
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
                key: 'label',
                dataIndex: 'label',
              },
            ]}
            rowKey="id"
            dataSource={options}
            pagination={{
              current: pagin.page,
              pageSize: pagin.limit,
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
            scroll={{
              y: 500,
            }}
            rowSelection={{
              type: 'radio',
              selectedRowKeys: _value,
              onSelect: function (record, selected, selectedRows) {
                if (selected) {
                  const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                  _onChange(selectedRowKeys);
                }
              },
            }}
          />
        );
      }}
    </AutoComplete>
  );
};

import Mock from 'mockjs';
import React, { useState } from 'react';

import { PagingEntityValueHOC } from '../../src/index';
import Table from '../../src/table';

const dataSource = Array.from({ length: 100 }).map((_, _index) => {
  const label = Mock.mock('@name');
  const value = `${_index + 1}`; // Mock.mock('@guid');

  return {
    id: value,
    name: label,
    address: Mock.mock('@region'),
    height: Mock.mock('@integer(60, 100)'),
    width: Mock.mock('@integer(60, 100)'),
    nativePlace: Mock.mock('@city'),
    label,
    value,
  };
});

export default () => {
  const [value, setValue] = useState([dataSource[0]]);

  function loadData(page, limit, _kw) {
    console.log(page, limit, _kw);

    return new Promise((resolve) => {
      const result = !_kw ? [] : dataSource.filter(({ label }) => label.indexOf(_kw) !== -1);

      resolve({
        totalCount: result.length,
        data: result.slice((page - 1) * limit, page * limit),
      });
    });
  }

  return (
    <PagingEntityValueHOC value={value} onChange={setValue}>
      <Table.AutoCompleteTablePagingSelect
        placeholder="AutoCompleteTablePagingSelect"
        style={{ width: 600 }}
        dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
        defaultOptions={[dataSource[0]]}
        mode="multiple"
        pagingProps={{
          loadData,
          defaultLimit: 5,
        }}
        tablePagingProps={{
          rowKey: 'id',
          columns: [
            {
              title: '名称',
              key: 'name',
              dataIndex: 'name',
            },
            {
              title: '地址',
              key: 'address',
              dataIndex: 'address',
            },
            {
              title: '籍贯',
              key: 'nativePlace',
              dataIndex: 'nativePlace',
            },
            {
              title: '身高',
              key: 'height',
              dataIndex: 'height',
            },
            {
              title: '体重',
              key: 'width',
              dataIndex: 'width',
            },
          ],
        }}
      />
    </PagingEntityValueHOC>
  );
};

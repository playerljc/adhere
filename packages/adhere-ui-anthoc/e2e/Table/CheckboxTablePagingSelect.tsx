import Mock from 'mockjs';
import React, { useState } from 'react';

import Table from '../../src/table';

const dataSource = Array.from({ length: 100 }).map(() => {
  const label = Mock.mock('@name');
  const value = Mock.mock('@guid');

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
  const [value, setValue] = useState([]);

  function loadData(page, limit) {
    console.log('paging', page, limit);

    return new Promise((resolve) => {
      resolve({
        totalCount: dataSource.length,
        data: dataSource.slice((page - 1) * limit, page * limit),
      });
    });
  }

  return (
    <Table.TablePagingSelect
      mode="multiple"
      style={{ width: 600 }}
      placeholder="RadioPagingList"
      value={value}
      onChange={setValue}
      loadData={loadData}
      defaultLimit={5}
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
  );
};

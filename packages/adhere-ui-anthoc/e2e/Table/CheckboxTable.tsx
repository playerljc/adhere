import Mock from 'mockjs';
import React, { useState } from 'react';

import Table from '../../src/table';

const options = Array.from({ length: 20 }).map(() => {
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

const columns = [
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
];

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Table.CheckboxTable
      value={value}
      onChange={setValue}
      options={options}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

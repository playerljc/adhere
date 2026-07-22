import Mockjs, { Random } from 'mockjs';
import React, { useState } from 'react';

import Table from '../../src/table';

const TREE_DATA = [
  {
    value: 'parent 1',
    title: 'parent 1',
    name: 'parent 1',
    id: 'parent 1',
    address: Random.city(true),
    nativePlace: Mockjs.mock('@name'),
    height: Mockjs.mock('@integer(60, 100)'),
    width: Mockjs.mock('@integer(60, 100)'),
    children: [
      {
        value: 'leaf1',
        title: 'leaf1',
        name: 'leaf1',
        id: 'leaf1',
        address: Random.city(true),
        nativePlace: Mockjs.mock('@name'),
        height: Mockjs.mock('@integer(60, 100)'),
        width: Mockjs.mock('@integer(60, 100)'),
      },
      {
        value: 'leaf2',
        title: 'leaf2',
        name: 'leaf2',
        id: 'leaf2',
        address: Random.city(true),
        nativePlace: Mockjs.mock('@name'),
        height: Mockjs.mock('@integer(60, 100)'),
        width: Mockjs.mock('@integer(60, 100)'),
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Table.TreeTableSelect
      placeholder="TreeTableSelect single"
      style={{ width: 600 }}
      dropdownStyle={{ width: 1000 }}
      value={value}
      onChange={setValue}
      treeData={TREE_DATA}
      tableProps={{
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
        ],
        pagination: false,
      }}
    />
  );
};

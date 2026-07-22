import Mockjs, { Random } from 'mockjs';
import React, { useState } from 'react';

import Table from '../../src/table';

const options = [
  {
    value: 'parent 1',
    title: 'parent 1',
    name: 'parent 1',
    id: 'parent 1',
    address: Random.city(true),
    nativePlace: Mockjs.mock('@name'),
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        name: 'parent 1-0',
        id: 'parent 1-0',
        address: Random.city(true),
        nativePlace: Mockjs.mock('@name'),
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
            name: 'leaf1',
            id: 'leaf1',
            address: Random.city(true),
            nativePlace: Mockjs.mock('@name'),
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            name: 'leaf2',
            id: 'leaf2',
            address: Random.city(true),
            nativePlace: Mockjs.mock('@name'),
          },
        ],
      },
      {
        value: 'leaf3',
        title: 'leaf3',
        name: 'leaf3',
        id: 'leaf3',
        address: Random.city(true),
        nativePlace: Mockjs.mock('@name'),
      },
    ],
  },
];

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
  const [value, setValue] = useState(undefined);

  return (
    <Table.RadioTreeTable
      value={value}
      onChange={setValue}
      options={options}
      columns={columns}
      expandable={{ defaultExpandAllRows: true }}
      pagination={false}
    />
  );
};

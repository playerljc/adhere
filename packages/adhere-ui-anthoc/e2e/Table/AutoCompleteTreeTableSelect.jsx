import Mockjs, { Random } from 'mockjs';
import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

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
        value: 'parent 1-0',
        title: 'parent 1-0',
        name: 'parent 1-0',
        id: 'parent 1-0',
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
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        name: 'parent 1-1',
        id: 'parent 1-1',
        address: Random.city(true),
        nativePlace: Mockjs.mock('@name'),
        height: Mockjs.mock('@integer(60, 100)'),
        width: Mockjs.mock('@integer(60, 100)'),
        children: [
          {
            value: 'leaf3',
            title: 'leaf3',
            name: 'leaf3',
            id: 'leaf3',
            address: Random.city(true),
            nativePlace: Mockjs.mock('@name'),
            height: Mockjs.mock('@integer(60, 100)'),
            width: Mockjs.mock('@integer(60, 100)'),
          },
        ],
      },
    ],
  },
];

const defaultTreeData = {
  key: 'leaf2',
  value: [
    {
      value: 'parent 1',
      title: 'parent 1',
      id: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          id: 'parent 1-0',
          children: [
            {
              value: 'leaf2',
              title: 'leaf2',
              id: 'leaf2',
            },
          ],
        },
      ],
    },
  ],
};

const FLAT_TREE_DATA = Util.treeToArray(
  TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'id',
);

const flatDefaultTreeData = {
  key: 'leaf2',
  value: Util.treeToArray(
    defaultTreeData.value,
    {
      parentIdAttr: 'pId',
      rootParentId: 0,
    },
    'id',
  ),
};

export default () => {
  const [treeData, setTreeData] = useState([]);

  const [value, setValue] = useState(undefined);

  return (
    <Table.AutoCompleteTreeTableSelect
      placeholder="AutoCompleteTreeTableSelect"
      style={{ width: 800 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      multiple
      treeDataSimpleMode
      value={value}
      onChange={setValue}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setTreeData([]);
            resolve();
            return;
          }

          setTimeout(() => {
            // ------------------正常------------------
            // const flatTreeData = Util.treeToArray(
            //   TREE_DATA,
            //   { parentIdAttr: 'pId', rootParentId: '' },
            //   'value',
            // );
            //
            // const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);
            //
            // const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
            //   keyAttr: 'value',
            //   titleAttr: 'title',
            //   parentIdAttr: 'pId',
            //   rootParentId: '',
            // });
            // ------------------正常------------------

            // ------------------flat-----------------------
            const result = FLAT_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);

            const targetTreeData = Util.treeToArray(
              Util.completionIncompleteFlatArr(FLAT_TREE_DATA, result, {
                keyAttr: 'id',
                titleAttr: 'title',
                parentIdAttr: 'pId',
                rootParentId: 0,
              }),
              {
                keyAttr: 'id',
                titleAttr: 'title',
                parentIdAttr: 'pId',
                rootParentId: 0,
              },
            );
            // ------------------flat-----------------------

            setTreeData(targetTreeData);

            resolve();
          }, 100);
        });
      }}
      treeData={treeData}
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
        pagination: false,
      }}
    />
  );
};

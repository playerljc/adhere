import React, { useState } from 'react';

import { AutoComplete, Util } from '@baifendian/adhere';

const TREE_DATA = [
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
            value: 'leaf1',
            title: 'leaf1',
            id: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            id: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        id: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: 'leaf3',
            id: 'leaf3',
          },
        ],
      },
    ],
  },
];

const FLAT_TREE_DATA = Util.treeToArray(
  TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'id',
);

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

  const [value, setValue] = useState('leaf2');

  return (
    <AutoComplete.TreeAutoComplete
      value={value}
      style={{ width: 200 }}
      defaultTreeData={flatDefaultTreeData}
      treeDataSimpleMode
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setTreeData([]);
            resolve();
            return;
          }

          setTimeout(() => {
            // flat
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

            setTreeData(targetTreeData);

            resolve();
          }, 100);
        });
      }}
      treeData={treeData}
      onChange={(_value) => {
        setValue(_value);
      }}
    />
  );
};

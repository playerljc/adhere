import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import TreeSelect from '../../src/tree-select';

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
            title: 'leaf2Text',
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

const defaultTreeData = [
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
            title: 'leaf2Text',
            id: 'leaf2',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [treeData, setTreeData] = useState([]);

  const [value, setValue] = useState('leaf2');

  return (
    <TreeSelect.AutoCompleteTreeSelect
      style={{ width: 300 }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      defaultTreeData={defaultTreeData}
      placeholder="AutoCompleteTreeSelect"
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setTreeData([]);
            resolve();
            return;
          }

          setTimeout(() => {
            const flatTreeData = Util.treeToArray(
              TREE_DATA,
              { parentIdAttr: 'pId', rootParentId: '' },
              'value',
            );

            const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);

            const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
              keyAttr: 'value',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: '',
            });

            setTreeData(targetTreeData);

            resolve();
          }, 100);
        });
      }}
      treeData={treeData}
      onChange={setValue}
    />
  );
};

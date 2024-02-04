// import { TreeSelect } from 'antd';
import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import TreeAutoComplete from '../src/TreeAutoComplete';

// import { City, County, Province } from './mock/pcc';
import '../src/index.less';

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
            title: 'leaf2',
            id: 'leaf2',
          },
        ],
      },
    ],
  },
];

const flatDefaultTreeData = Util.treeToArray(
  defaultTreeData,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'id',
);

// const treeData = [
//   ...Province.map((t) => ({
//     title: t.name,
//     label: t.name,
//     value: t.id,
//     id: t.id,
//     isLeaf: false,
//     pId: 0,
//   })),
//   ...Object.keys(City)
//     .map((key) =>
//       City[key].map((t) => ({
//         title: t.name,
//         label: t.name,
//         value: t.id,
//         id: t.id,
//         isLeaf: false,
//         pId: `${key}`,
//       })),
//     )
//     .flat(),
//   ...Object.keys(County)
//     .map((key) =>
//       County[key].map((t) => ({
//         title: t.name,
//         label: t.name,
//         value: t.id,
//         id: t.id,
//         isLeaf: true,
//         pId: key,
//       })),
//     )
//     .flat(),
// ];

export default () => {
  const [treeData, setTreeData] = useState([]);

  const [value, setValue] = useState('leaf2');

  return (
    <TreeAutoComplete
      value={value}
      style={{ width: 200 }}
      // defaultTreeData={flatDefaultTreeData}
      defaultTreeData={defaultTreeData}
      // treeDataSimpleMode
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

            // flat
            // const result = FLAT_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);
            //
            // const targetTreeData = Util.treeToArray(
            //   Util.completionIncompleteFlatArr(FLAT_TREE_DATA, result, {
            //     keyAttr: 'id',
            //     titleAttr: 'title',
            //     parentIdAttr: 'pId',
            //     rootParentId: 0,
            //   }),
            //   {
            //     keyAttr: 'id',
            //     titleAttr: 'title',
            //     parentIdAttr: 'pId',
            //     rootParentId: 0,
            //   },
            // );

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

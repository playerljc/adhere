import { TreeSelect } from 'antd';
import React from 'react';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    a: 1,
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

export default () => {
  return (
    <TreeSelect
      style={{ width: 200 }}
      showSearch
      allowClear
      onSearch={(value) => {
        console.log(value);
      }}
      dropdownRender={(originNode) => {
        return originNode;
      }}
      onDropdownVisibleChange={() => {}}
      onChange={(_value, label, extra) => {
        debugger;
      }}
      treeData={treeData}
    />
  );
};

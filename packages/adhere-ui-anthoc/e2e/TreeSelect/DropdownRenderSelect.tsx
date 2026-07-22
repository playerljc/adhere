import React, { useState } from 'react';

import Tree from '../../src/tree';
import TreeSelect from '../../src/tree-select';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    key: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        key: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
            key: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            key: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        key: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: 'leaf3',
            key: 'leaf3',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState(['leaf1']);

  return (
    <TreeSelect.DropdownRenderSelect
      treeCheckable
      style={{ width: 300 }}
      placeholder="DropdownRenderSelect"
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      value={value}
      onChange={setValue}
      treeData={treeData}
      treeDefaultExpandAll
    >
      {({ value: selectedValue, onChange, treeData: data }) => {
        return (
          <div style={{ padding: 8 }}>
            <Tree
              checkable
              defaultExpandAll
              checkedKeys={selectedValue}
              onCheck={(checkedKeys) => {
                onChange?.(checkedKeys);
              }}
              treeData={data}
              fieldNames={{ title: 'title', key: 'value', children: 'children' }}
            />
          </div>
        );
      }}
    </TreeSelect.DropdownRenderSelect>
  );
};

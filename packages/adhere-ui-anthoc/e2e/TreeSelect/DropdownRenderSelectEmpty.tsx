import React, { useState } from 'react';

import Space from '../../src/space';
import Tree from '../../src/tree';
import TreeSelect from '../../src/tree-select';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    key: 'parent 1',
    children: [
      {
        value: 'leaf1',
        title: 'leaf1',
        key: 'leaf1',
      },
    ],
  },
];

export default () => {
  const [emptyValue, setEmptyValue] = useState();
  const [shouldRenderValue, setShouldRenderValue] = useState();

  return (
    <Space orientation="vertical" size={24}>
      <div>
        <div style={{ marginBottom: 8 }}>emptyContent：treeData 为空时展示自定义空态</div>
        <TreeSelect.DropdownRenderSelect
          style={{ width: 300 }}
          placeholder="emptyContent"
          value={emptyValue}
          onChange={setEmptyValue}
          treeData={[]}
          emptyContent={<div style={{ padding: 16, textAlign: 'center' }}>自定义空数据</div>}
        >
          {({ value: selectedValue, onChange, treeData: data }) => (
            <Tree
              selectedKeys={selectedValue ? [selectedValue] : []}
              onSelect={(keys) => onChange?.(keys[0])}
              treeData={data}
              fieldNames={{ title: 'title', key: 'value', children: 'children' }}
            />
          )}
        </TreeSelect.DropdownRenderSelect>
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>
          shouldRenderEmptyData：无数据时仍渲染 children（不展示空态）
        </div>
        <TreeSelect.DropdownRenderSelect
          style={{ width: 300 }}
          placeholder="shouldRenderEmptyData"
          value={shouldRenderValue}
          onChange={setShouldRenderValue}
          treeData={[]}
          shouldRenderEmptyData
        >
          {({ value: selectedValue, onChange, treeData: data }) => (
            <div style={{ padding: 12 }}>
              <div style={{ marginBottom: 8, color: '#999' }}>treeData 为空仍渲染</div>
              <Tree
                selectedKeys={selectedValue ? [selectedValue] : []}
                onSelect={(keys) => onChange?.(keys[0])}
                treeData={data?.length ? data : treeData}
                fieldNames={{ title: 'title', key: 'value', children: 'children' }}
              />
            </div>
          )}
        </TreeSelect.DropdownRenderSelect>
      </div>
    </Space>
  );
};

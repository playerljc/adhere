import React, { useState } from 'react';

import Button from '../../src/button';
import Space from '../../src/space';
import TreeSelect from '../../src/tree-select';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
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
            title: 'leaf3',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState('invalid');

  return (
    <Space direction="vertical" size={16}>
      <div>
        <div style={{ marginBottom: 8 }}>isHideInvalidValue=true（无效值会被隐藏）</div>
        <TreeSelect
          style={{ width: 300 }}
          placeholder="TreeSelectHideInvalidValue"
          treeData={treeData}
          treeDefaultExpandAll
          value={value}
          onChange={setValue}
          isHideInvalidValue
        />
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>当前 value: {String(value)}</div>
        <Space>
          <Button type="primary" onClick={() => setValue('invalid')}>
            设为无效值
          </Button>
          <Button onClick={() => setValue('leaf1')}>设为 leaf1</Button>
        </Space>
      </div>
    </Space>
  );
};

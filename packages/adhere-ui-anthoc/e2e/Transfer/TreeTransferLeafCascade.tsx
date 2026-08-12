import { Space, Typography } from 'antd';
import React, { useState } from 'react';

import Transfer from '../../src/transfer';

const treeData = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { key: '0-1-0', title: '0-1-0' },
      { key: '0-1-1', title: '0-1-1' },
    ],
  },
  { key: '0-2', title: '0-2' },
  { key: '0-3', title: '0-3' },
  { key: '0-4', title: '0-4' },
];

export default () => {
  const [leafTargetKeys, setLeafTargetKeys] = useState<string[]>(['0-1-0']);
  const [cascadeTargetKeys, setCascadeTargetKeys] = useState<string[]>([]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Typography.Title level={5}>只选叶子节点（leafOnly）</Typography.Title>
        <Typography.Paragraph type="secondary">
          父节点不可勾选，只能选择叶子节点穿梭
        </Typography.Paragraph>
        <Transfer.TreeTransfer
          dataSource={treeData}
          targetKeys={leafTargetKeys}
          onChange={setLeafTargetKeys}
          titles={['Source', 'Target']}
          showSearch
          leafOnly
        />
      </div>

      <div>
        <Typography.Title level={5}>级联选择（checkStrictly=false）</Typography.Title>
        <Typography.Paragraph type="secondary">
          勾选父节点时，会级联选中其所有子孙节点
        </Typography.Paragraph>
        <Transfer.TreeTransfer
          dataSource={treeData}
          targetKeys={cascadeTargetKeys}
          onChange={setCascadeTargetKeys}
          titles={['Source', 'Target']}
          showSearch
          checkStrictly={false}
        />
      </div>
    </Space>
  );
};

import { Space, Tag, Typography } from 'antd';
import React, { useState } from 'react';

import Transfer from '../../src/transfer';

type TreeTransferItem = {
  key: string;
  title: string;
  description?: string;
};

const treeData = [
  { key: '0-0', title: '0-0', description: '独立节点' },
  {
    key: '0-1',
    title: '0-1',
    description: '分组',
    children: [
      { key: '0-1-0', title: '0-1-0', description: '叶子节点' },
      { key: '0-1-1', title: '0-1-1', description: '叶子节点' },
    ],
  },
  { key: '0-2', title: '0-2', description: '独立节点' },
  { key: '0-3', title: '0-3', description: '独立节点' },
  { key: '0-4', title: '0-4', description: '独立节点' },
];

export default () => {
  const [targetKeys, setTargetKeys] = useState<string[]>(['0-1-0']);

  return (
    <Transfer.TreeTransfer
      dataSource={treeData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      titles={['Source', 'Target']}
      showSearch
      filterOption={(input: string, item: TreeTransferItem) =>
        `${item.title ?? ''} ${item.description ?? ''}`.toLowerCase().includes(input.toLowerCase())
      }
      render={(item: TreeTransferItem) => ({
        label: (
          <Space size={8}>
            <Tag color="blue">{item.key}</Tag>
            <span>{item.title}</span>
            {item.description ? (
              <Typography.Text type="secondary">{item.description}</Typography.Text>
            ) : null}
          </Space>
        ),
        value: `${item.title ?? ''} ${item.description ?? ''}`,
      })}
    />
  );
};

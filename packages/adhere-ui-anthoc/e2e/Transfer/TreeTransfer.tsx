import { Space, Tag, Typography } from 'antd';
import React, { useState } from 'react';

import Transfer from '../../src/transfer';

type TreeTransferItem = {
  key: string;
  title: string;
  description?: string;
  children?: TreeTransferItem[];
};

/** 生成多层级、多节点的测试树数据 */
const createDeepTreeData = (depth: number, breadth: number, prefix = '0'): TreeTransferItem[] => {
  if (depth <= 0) {
    return [];
  }

  return Array.from({ length: breadth }, (_, index) => {
    const key = `${prefix}-${index}`;
    const isLeaf = depth === 1;

    return {
      key,
      title: `节点 ${key}`,
      description: isLeaf ? '叶子节点' : `第 ${prefix.split('-').length} 层分组`,
      children: isLeaf ? undefined : createDeepTreeData(depth - 1, breadth, key),
    };
  });
};

const treeData: TreeTransferItem[] = [
  // ...createDeepTreeData(5, 4),
  {
    key: 'region-east',
    title: '华东大区',
    description: '业务区域',
    children: [
      {
        key: 'region-east-sh',
        title: '上海',
        description: '城市',
        children: [
          {
            key: 'region-east-sh-pudong',
            title: '浦东新区',
            description: '区县',
            children: [
              { key: 'region-east-sh-pudong-lujiazui', title: '陆家嘴', description: '街道' },
              { key: 'region-east-sh-pudong-zhangjiang', title: '张江', description: '街道' },
              { key: 'region-east-sh-pudong-jinqiao', title: '金桥', description: '街道' },
            ],
          },
          {
            key: 'region-east-sh-minhang',
            title: '闵行区',
            description: '区县',
            children: [
              { key: 'region-east-sh-minhang-xinzhuang', title: '莘庄', description: '街道' },
              { key: 'region-east-sh-minhang-qibao', title: '七宝', description: '街道' },
            ],
          },
        ],
      },
      {
        key: 'region-east-hz',
        title: '杭州',
        description: '城市',
        children: [
          {
            key: 'region-east-hz-xihu',
            title: '西湖区',
            description: '区县',
            children: [
              { key: 'region-east-hz-xihu-xixi', title: '西溪', description: '街道' },
              { key: 'region-east-hz-xihu-longjing', title: '龙井', description: '街道' },
            ],
          },
        ],
      },
    ],
  },
  ...Array.from({ length: 1 }, (_, index) => ({
    key: `extra-${index}`,
    title: `额外分组 ${index}`,
    description: '顶层分组',
    children: createDeepTreeData(2, 3, `extra-${index}`),
  })),
];

const collectLeafKeys = (nodes: TreeTransferItem[]): string[] =>
  nodes.flatMap((node) =>
    node.children?.length ? collectLeafKeys(node.children) : node.key ? [node.key] : [],
  );

export default () => {
  const [targetKeys, setTargetKeys] = useState<string[]>(() => collectLeafKeys(treeData).slice(0, 30));

  return (
    <div style={{ width: 300 }}>
      <Transfer.TreeTransfer
        dataSource={treeData}
        targetKeys={targetKeys}
        onChange={setTargetKeys}
        titles={['Source', 'Target']}
        showSearch
        filterOption={(input: string, item: TreeTransferItem) =>
          `${item.title ?? ''} ${item.description ?? ''}`
            .toLowerCase()
            .includes(input.toLowerCase())
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
    </div>
  );
};

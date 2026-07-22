import { Tag } from 'antd';
import React, { useState } from 'react';

import Transfer from '../../src/transfer';

const mockTags = ['cat', 'dog', 'bird'];

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
  tag: mockTags[i % 3],
}));

const columns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag: string) => (
      <Tag style={{ marginInlineEnd: 0 }} color="cyan">
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];

export default () => {
  const [targetKeys, setTargetKeys] = useState<string[]>(['0', '1']);

  return (
    <Transfer.TableTransfer
      dataSource={mockData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      titles={['可选', '已选']}
      showSearch
      filterOption={(input, item) => item.title?.includes(input) || item.tag?.includes(input)}
      leftColumns={columns}
      rightColumns={columns}
    />
  );
};

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

const options = mockData.map(({ key, title, description, tag }) => ({
  label: title,
  value: key,
  description,
  tag,
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
  const [value, setValue] = useState(['0', '1']);

  return (
    <div style={{ width: 500 }}>
      <Transfer.TableTransferSelect
        placeholder="TableTransferSelect"
        style={{ width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflowY: 'auto' }}
        value={value}
        onChange={setValue}
        options={options}
        leftColumns={columns}
        rightColumns={columns}
        transferProps={{
          titles: ['可选', '已选'],
          showSearch: true,
          filterOption: (input, item) => item.title?.includes(input) || item.tag?.includes(input),
        }}
      />
    </div>
  );
};

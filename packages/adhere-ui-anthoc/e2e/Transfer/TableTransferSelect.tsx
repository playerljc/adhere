import { Tag } from 'antd';
import React, { useState } from 'react';

import Transfer from '../../src/transfer';

const mockTags = ['cat', 'dog', 'bird'];

const options = Array.from({ length: 20 }).map((_, i) => ({
  label: `content${i + 1}`,
  value: i.toString(),
  tag: mockTags[i % 3],
  description: `description of content${i + 1}`,
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
        {tag?.toUpperCase?.()}
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
    <Transfer.TableTransferSelect
      placeholder="TableTransferSelect"
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 400, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      options={options}
      leftColumns={columns}
      rightColumns={columns}
      transferProps={{
        titles: ['可选', '已选'],
        showSearch: true,
        filterOption: (input, item) =>
          item.title?.includes(input) || item.tag?.includes(input),
      }}
    />
  );
};

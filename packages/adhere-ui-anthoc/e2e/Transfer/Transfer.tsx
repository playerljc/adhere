import React, { useState } from 'react';

import Transfer from '../../src/transfer';

const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

export default () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={setTargetKeys}
      onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
      }}
      render={(item) => item.title}
      showSearch
      filterOption={(input, item) =>
        (item.title ?? '').toLowerCase().includes(input.toLowerCase()) ||
        (item.description ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

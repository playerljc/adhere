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
  const [targetKeys, setTargetKeys] = useState<string[]>([]);

  return (
    <Transfer.TreeTransfer
      dataSource={treeData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      titles={['Source', 'Target']}
    />
  );
};

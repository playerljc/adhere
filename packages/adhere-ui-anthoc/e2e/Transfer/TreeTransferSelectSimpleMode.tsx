import React, { useState } from 'react';

import Transfer from '../../src/transfer';

/** 简单格式（扁平）树数据：通过 id / pId 表达层级 */
const treeData = [
  { id: '0-0', pId: 0, key: '0-0', title: '0-0' },
  { id: '0-1', pId: 0, key: '0-1', title: '0-1' },
  { id: '0-1-0', pId: '0-1', key: '0-1-0', title: '0-1-0' },
  { id: '0-1-1', pId: '0-1', key: '0-1-1', title: '0-1-1' },
  { id: '0-2', pId: 0, key: '0-2', title: '0-2' },
  { id: '0-3', pId: 0, key: '0-3', title: '0-3' },
  { id: '0-4', pId: 0, key: '0-4', title: '0-4' },
];

export default () => {
  const [value, setValue] = useState(['0-1-0']);

  return (
    <Transfer.TreeTransferSelect
      placeholder="TreeTransferSelect SimpleMode"
      style={{ width: 410 }}
      dropdownStyle={{ maxHeight: 400, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      treeData={treeData}
      transferProps={{
        titles: ['可选', '已选'],
        showSearch: true,
        treeDataSimpleMode: true,
      }}
    />
  );
};

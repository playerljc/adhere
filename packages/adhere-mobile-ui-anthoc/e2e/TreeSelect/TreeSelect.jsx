import React, { useState } from 'react';

import { TreeSelect } from '../../src';
import { flatTreeData } from './treeData';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <TreeSelect
        treeData={flatTreeData}
        treeDataSimpleMode
        size="middle"
        checkStrictly
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

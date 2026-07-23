import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import { TreeSelect } from '../../src';
import { generateTree } from './treeData';

import '../../src/index.less';

const initialTreeData = generateTree(1, 3);

export default () => {
  const [value, setValue] = useState([]);
  const [treeData, setTreeData] = useState(initialTreeData);

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <TreeSelect.AsyncTreeLeafSelect
        value={value}
        onChange={setValue}
        treeData={treeData}
        size="middle"
        loadData={(nodeData) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const children = generateTree(1, 3, 1, nodeData.key);

              setTreeData((_treeData) => {
                const item = Util.findNodeByKey(_treeData, nodeData.key, { keyAttr: 'key' });

                if (item) {
                  item.children = children ?? [];
                }

                return JSON.parse(JSON.stringify(_treeData));
              });

              resolve();
            }, 1000);
          });
        }}
      />
    </div>
  );
};

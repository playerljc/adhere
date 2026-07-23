import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import { TreeSelect } from '../../src';
import { generateTree } from './treeData';

import '../../src/index.less';

const initialTreeData = Util.treeToArray(
  generateTree(1, 3),
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'key',
);

export default () => {
  const [value, setValue] = useState([]);
  const [treeData, setTreeData] = useState(initialTreeData);

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <TreeSelect.AsyncTreeSelect
        value={value}
        onChange={setValue}
        treeData={treeData}
        treeDataSimpleMode
        size="middle"
        checkStrictly
        loadData={(nodeData) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const children = generateTree(1, 3, 1, nodeData.key);

              setTreeData((_treeData) => {
                const item = Util.findNodeByKey(_treeData, nodeData.key, { keyAttr: 'key' });

                if (item) {
                  item.children = children ?? [];
                }

                return JSON.parse(
                  JSON.stringify(
                    Util.treeToArray(
                      _treeData,
                      {
                        parentIdAttr: 'pId',
                        rootParentId: 0,
                      },
                      'key',
                    ),
                  ),
                );
              });

              resolve();
            }, 1000);
          });
        }}
      />
    </div>
  );
};

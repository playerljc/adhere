import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import Tree from '../src';

import '../src/index.less';

function generateTree(depth, width, currentDepth = 1, parentKey = '0') {
  // 基本结构
  const tree = [];

  // 当深度超过指定的深度时，返回空 children
  if (currentDepth > depth) {
    return tree;
  }

  for (let i = 0; i < width; i++) {
    const key = `${parentKey}-${i}`;
    tree.push({
      key: key,
      title: `Node ${key}`,
      children: generateTree(depth, width, currentDepth + 1, key), // 递归生成子节点
      isLeaf: false,
      props: {
        depth,
        width,
      },
    });
  }

  return tree;
}

export default () => {
  const [treeData, setTreeData] = useState(generateTree(1, 3));

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <Tree
        treeData={treeData}
        size="middle"
        multiple={false}
        checkable
        checkStrictly
        onExpand={function () {}}
        onSelect={function () {}}
        onCheck={function () {}}
        loadData={(nodeData) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              setTreeData((_treeData) => {
                const children = generateTree(1, 3, 1, nodeData.key);

                const item = Util.findNodeByKey(_treeData, nodeData.key, { keyAttr: 'key' });

                item.children = children;

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

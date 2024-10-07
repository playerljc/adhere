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

const treeData = generateTree(1, 3);

const flat = Util.treeToArray(
  generateTree(1, 3),
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'key',
);

export default () => {
  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <Tree
        treeData={treeData}
        // treeDataSimpleMode
        size="middle"
        multiple={false}
        checkable
        checkStrictly
        checkedKeys={['0-0-0-0', '0-0-0-1', '0-0-0-2']}
        onExpand={function () {}}
        onSelect={function () {}}
        onCheck={function () {}}
        loadData={(nodeData) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(generateTree(1, 3, 1, nodeData.key));

              // resolve(
              //   Util.treeToArray(
              //     generateTree(1, 3, 1, nodeData.key),
              //     {
              //       parentIdAttr: 'pId',
              //       rootParentId: 0,
              //     },
              //     'key',
              //   ),
              // );
            }, 1000);
          });
        }}
      />
    </div>
  );
};

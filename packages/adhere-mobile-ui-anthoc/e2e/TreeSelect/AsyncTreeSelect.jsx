import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import { TreeSelect } from '../../src';

import '../../src/index.less';

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

const _treeData = generateTree(1, 3);

const _flat = Util.treeToArray(
  _treeData,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'key',
);

export default () => {
  const [value, setValue] = useState(['0-0-0-0', '0-0-0-1', '0-0-0-2']);

  const [treeData, setTreeData] = useState(_flat);

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <TreeSelect.AsyncTreeSelect
        value={value}
        onChange={function (_value) {
          setValue(value);
        }}
        treeData={treeData}
        treeDataSimpleMode
        size="middle"
        checkStrictly
        onExpand={function () {}}
        onSelect={function () {}}
        onCheck={function () {}}
        loadData={(nodeData) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const children = generateTree(1, 3, 1, nodeData.key);

              // 普通
              // setTreeData((_treeData) => {
              //   const item = Util.findNodeByKey(_treeData, nodeData.key, { keyAttr: 'key' });
              //
              //   if (item) {
              //     item.children = children ?? [];
              //   }
              //
              //   return JSON.parse(JSON.stringify(_treeData));
              // });

              // 拉平
              setTreeData((_treeData) => {
                const item = Util.findNodeByKey(_treeData, nodeData.key, { keyAttr: 'key' });

                if (item) {
                  item.children = children ?? [];
                }

                const data = Util.treeToArray(
                  _treeData,
                  {
                    parentIdAttr: 'pId',
                    rootParentId: 0,
                  },
                  'key',
                );

                return JSON.parse(JSON.stringify(data));
              });

              resolve();
            }, 1000);
          });
        }}
      />
    </div>
  );
};

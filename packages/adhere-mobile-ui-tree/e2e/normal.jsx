import { ScanCodeOutline } from 'antd-mobile-icons';
import React from 'react';

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
      // checkable: currentDepth === depth,
      // disabled: currentDepth !== depth,
      indent: key === '0-0-0' ? 50 : 30,
    });
  }

  return tree;
}

// 生成深度为 3，宽度为 3 的树形数据
const treeData = generateTree(3, 3);

const flat = Util.treeToArray(
  treeData,
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
        showSearch
        treeData={flat}
        treeDataSimpleMode
        size="middle"
        multiple={false}
        checkable
        checkStrictly
        selectedKeys={['0-0-0-0']}
        expandedKeys={['0-0', '0-0-0']}
        checkedKeys={['0-0-0-0', '0-0-0-1', '0-0-0-2']}
        onExpand={function () {}}
        onSelect={function () {}}
        onCheck={function () {
          debugger;
        }}
        icon={() => <ScanCodeOutline />}
        // rowGap={30}
        // checkboxWidth={30}
        // checkboxGap={10}
        // titleGap={10}
        // iconGap={10}
        // indent={50}
        // titleRender={function () {
        //   return <span>333</span>;
        // }}
        // switcherIcon={function () {
        //   return <span>666</span>;
        // }}
      />
    </div>
  );
};

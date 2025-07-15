/**
 * Tree 模块测试文件
 * @description 测试树结构处理功能
 */
import TreeUtil from '../src/tree';

// 定义测试用的 Antd Tree 节点数据
const antdTreeNodes = [
  {
    key: '1',
    title: '1',
    value: '1',
    isLeaf: false,
    properties: {
      a: 1,
    },
    children: [
      {
        key: '1-1',
        title: '1-1',
        value: '1-1',
        isLeaf: false,
        properties: {
          a: 1,
        },
        children: [
          {
            key: '1-1-1',
            title: '1-1-1',
            value: '1-1-1',
            isLeaf: true,
            properties: {
              a: 1,
            },
          },
        ],
      },
      {
        key: '1-2',
        title: '1-2',
        value: '1-2',
        isLeaf: true,
        properties: {
          a: 1,
        },
      },
    ],
  },
];

console.log('原始树结构:', antdTreeNodes);

// 测试树转数组功能
const flatArr = TreeUtil.treeToArray(antdTreeNodes, {
  parentIdAttr: 'pid',
  rootParentId: -1,
});
console.log('树转数组结果:', flatArr);

// 测试数组转树功能
const treeNodes = TreeUtil.arrayToAntdTree(flatArr, {
  keyAttr: 'key',
  titleAttr: 'title',
  parentIdAttr: 'pid',
  rootParentId: -1,
});
console.log('数组转树结果:', treeNodes);

// 测试基于扁平数据的树过滤功能
const filter1Nodes = TreeUtil.filterTreeByFlatData(flatArr, '2', {
  keyAttr: 'key',
  titleAttr: 'title',
  parentIdAttr: 'pid',
  rootParentId: -1,
  filterAttr: 'value',
});
console.log('基于扁平数据的过滤结果:', filter1Nodes);

// 测试基于树结构的过滤功能
const filter2Nodes = TreeUtil.filterTree(antdTreeNodes, '2', {
  keyAttr: 'key',
  titleAttr: 'title',
  parentIdAttr: 'pid',
  rootParentId: -1,
  filterAttr: 'value',
});
console.log('基于树结构的过滤结果:', filter2Nodes);

// 测试根据 key 查找节点功能
const findNode = TreeUtil.findNodeByKey(antdTreeNodes, '1', {
  keyAttr: 'value',
});
console.log('查找节点结果:', findNode);

// 测试获取叶子节点功能（基于索引）
const leafNodes1 = TreeUtil.getLeafNodeByFlatDataToIndex(flatArr);
console.log('叶子节点（基于索引）:', leafNodes1);

// 测试获取树层级功能
const level = TreeUtil.getTreeLevelByIndexToFlat(
  flatArr,
  {
    keyAttr: 'key',
    titleAttr: 'title',
    parentIdAttr: 'pid',
    rootParentId: -1,
  },
  'isLeaf',
);
console.log('树层级:', level);

// 测试排除指定节点功能
const excludeNodes = TreeUtil.excludeAntdTreeNodes(antdTreeNodes, ['1-1']);
console.log('排除节点后的结果:', excludeNodes);

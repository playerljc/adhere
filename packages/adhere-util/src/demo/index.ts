import TreeUtil from '../tree';

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

const flatArr = TreeUtil.treeToArray(antdTreeNodes, {
  parentIdAttr: 'pid',
  rootParentId: -1,
});

const treeNodes = TreeUtil.arrayToAntdTree(flatArr, {
  keyAttr: 'key',
  titleAttr: 'title',
  parentIdAttr: 'pid',
  rootParentId: -1,
});

const filter1Nodes = TreeUtil.filterTreeByFlatData(flatArr, '2', {
  keyAttr: 'key',
  titleAttr: 'title',
  parentIdAttr: 'pid',
  rootParentId: -1,
  filterAttr: 'value',
});

const filter2Nodes = TreeUtil.filterTree(antdTreeNodes, '2', {
  keyAttr: 'key',
  titleAttr: 'title',
  parentIdAttr: 'pid',
  rootParentId: -1,
  filterAttr: 'value',
});

const findNode = TreeUtil.findNodeByKey(antdTreeNodes, '1', {
  keyAttr: 'value',
});

const leafNodes1 = TreeUtil.getLeafNodeByFlatDataToIndex(flatArr);

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

const excludeNodes = TreeUtil.excludeAntdTreeNodes(antdTreeNodes, ['1-1']);

console.log(excludeNodes);

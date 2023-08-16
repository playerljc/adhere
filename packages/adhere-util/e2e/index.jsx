import encrypt from '../src/encrypt';
import TreeUtil from '../src/tree';

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

// console.log(excludeNodes);

const kw =
  'W3siaWQiOiIxNTlBOWFkMS1COGY3LTdmZjYtNDg4RC1kODI0M0RDQTU2NTkiLCJjb25kaXRpb24iOjEsInR5cGUiOjQsImt3IjoiMzMzMzMzMzMiLCJncm91cElkIjoyMTIsImNvbnRlbnQiOiI8c3BhbiBjbGFzcz1cInRleHRcIj4yIDwvc3Bhbj48c3BhbiBjbGFzcz1cIm9wZXJhdG9yXCIgY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIj5PUjwvc3Bhbj48c3BhbiBjbGFzcz1cInRleHRcIj4gMyZuYnNwOzwvc3Bhbj4ifV0=';

console.log('kw', encrypt.base64Decode(kw));

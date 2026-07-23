import Util from '@baifendian/adhere-util';

export function generateTree(depth, width, currentDepth = 1, parentKey = '0') {
  const tree = [];

  if (currentDepth > depth) {
    return tree;
  }

  for (let i = 0; i < width; i++) {
    const key = `${parentKey}-${i}`;
    tree.push({
      key,
      title: `Node ${key}`,
      children: generateTree(depth, width, currentDepth + 1, key),
      isLeaf: false,
    });
  }

  return tree;
}

export const treeData = generateTree(3, 3);

export const flatTreeData = Util.treeToArray(
  treeData,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'key',
);

export const AUTOCOMPLETE_TREE_DATA = [
  {
    key: 'parent 1',
    title: 'parent 1Text',
    children: [
      {
        key: 'parent 1-0',
        title: 'parent 1-0Text',
        children: [
          {
            key: 'leaf1',
            title: 'leaf1Text',
          },
          {
            key: 'leaf2',
            title: 'leaf2Text',
          },
        ],
      },
      {
        key: 'parent 1-1',
        title: 'parent 1-1Text',
        children: [
          {
            key: 'leaf3',
            title: 'leaf3Text',
          },
        ],
      },
    ],
  },
];

export const AUTOCOMPLETE_FLAT_TREE_DATA = Util.treeToArray(
  AUTOCOMPLETE_TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'key',
);

export function filterFlatTreeByKeyword(flatData, kw) {
  const result = flatData.filter((_node) => _node.title.indexOf(kw) !== -1);

  const all = Util.completionIncompleteFlatArr(flatData, result, {
    keyAttr: 'key',
    titleAttr: 'title',
    parentIdAttr: 'pId',
    rootParentId: 0,
  });

  return Util.treeToArray(
    all,
    {
      parentIdAttr: 'pId',
      rootParentId: 0,
    },
    'key',
  );
}

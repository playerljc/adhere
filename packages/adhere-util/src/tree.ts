import { IAntdTreeNode, IAntdTreeSelectNode, IFlatTreeArrNode } from './types';

export interface TreeUtilType {
  treeToArray: (
    treeData: (IAntdTreeNode | IAntdTreeSelectNode)[],
    config: {
      parentIdAttr: string;
      rootParentId: string | number;
    },
    keyAttr?: string,
  ) => {
    [props: string]: any;
    children?: any[];
    key: string;
  }[];

  arrayToAntdTree: (
    arr: {
      [props: string]: any;
      children?: any[];
      isLeaf?: boolean;
      properties?: any;
    }[],
    config: IFlatTreeArrNode,
  ) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];

  arrayToAntdTreeSelect: (
    arr: any[],
    config: IFlatTreeArrNode,
  ) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];

  getAncestor: (
    data: any[],
    node: any,
    config: Omit<
      IFlatTreeArrNode,
      'titleAttr'
    > /*{ keyAttr: string; parentIdAttr: string; rootParentId: string | number }*/,
  ) => any[];

  getDescendants: (
    data: any[],
    node: any,
    config: Omit<
      IFlatTreeArrNode,
      'titleAttr'
    > /*{ keyAttr: string; parentIdAttr: string; rootParentId: string | number }*/,
  ) => any[];

  filterTreeByFlatData: (
    treeFlatNodes: any[],
    kw: string,
    config: IFlatTreeArrNode & { filterAttr: string },
  ) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];

  filterTree: (
    treeNodes: (IAntdTreeNode | IAntdTreeSelectNode)[],
    kw: string,
    config: IFlatTreeArrNode & { filterAttr: string },
  ) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];

  findNodeByKey: (
    treeData: (IAntdTreeNode | IAntdTreeSelectNode)[],
    val: any,
    config: { keyAttr: string },
  ) => IAntdTreeNode | IAntdTreeSelectNode | null;

  findParentNodeByKey: (
    treeData: (IAntdTreeNode | IAntdTreeSelectNode)[],
    val: any,
    config: { keyAttr: string },
  ) => IAntdTreeNode | IAntdTreeSelectNode | null | undefined;

  transformTreeData: (
    treeData: any[],
    childrenAttr: string,
    onCallback: (node: any) => IAntdTreeNode | IAntdTreeSelectNode,
  ) => (IAntdTreeNode | IAntdTreeSelectNode)[];

  getLeafNodesByIndex: (
    nodes: {
      [props: string]: any;
    }[],
    childrenAttr?: string,
    indexAttr?: string,
  ) => {
    [props: string]: any;
  }[];

  getLeafNodes: (
    nodes: {
      [props: string]: any;
    }[],
    childrenAttr?: string,
  ) => {
    [props: string]: any;
  }[];

  getLeafNodeByFlatData: (
    arr: any[],
    config: IFlatTreeArrNode,
  ) => {
    [props: string]: any;
  }[];

  getLeafNodeByFlatDataToIndex: (
    arr: any[],
    indexAttr?: string,
  ) => {
    [props: string]: any;
  }[];

  getTreeLevel: (nodes: (IAntdTreeNode | IAntdTreeSelectNode)[], keyAttr?: string) => number;

  getTreeLevelByIndex: (
    nodes: (IAntdTreeNode | IAntdTreeSelectNode)[],
    indexAttr: string,
    keyAttr: string,
  ) => number;

  getTreeLevelToFlat: (flatArr: any[], config: IFlatTreeArrNode) => number;

  getTreeLevelByIndexToFlat: (
    flatArr: any[],
    config: IFlatTreeArrNode,
    indexAttr: string,
  ) => number;

  getNodeLevel: (
    nodes: (IAntdTreeNode | IAntdTreeSelectNode)[],
    node: IAntdTreeNode | IAntdTreeSelectNode,
    keyAttr: string,
  ) => number;

  completionIncompleteFlatArr: (
    treeFlatNodes: any[],
    incompleteTreeFlatNodes: any,
    config: IFlatTreeArrNode,
  ) => (IFlatTreeArrNode & Omit<IAntdTreeNode | IAntdTreeSelectNode, 'value'>)[];

  excludeAntdTreeNodes: (
    nodes: IAntdTreeNode[],
    excludeKeys: string[],
    keyAttr?: string,
  ) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];

  excludeAntdSelectTreeNodes: (
    nodes: IAntdTreeSelectNode[],
    excludeKeys: string[],
    keyAttr?: string,
  ) => (IFlatTreeArrNode & Omit<IAntdTreeSelectNode, 'value'>)[];
}

const TreeUtil: TreeUtilType = {
  /**
   * treeToArray
   * @description tree数据转换成Array
   * @param treeData
   * @param config
   * @param keyAttr
   */
  treeToArray(treeData, config, keyAttr = 'key') {
    // key: string;
    // title: string;
    // isLeaf: boolean;
    // children?: IAntdTreeNode[];
    // properties?: any;
    const { parentIdAttr, rootParentId } = config;

    const result: any[] = [];

    function loop(context, data, parentId) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        result.push({
          ...item, // ('properties' in item ? item.properties : item),
          // ...item.properties,
          [parentIdAttr]: parentId,
        });

        if (item.children && Array.isArray(item.children) && item.children.length) {
          loop(context, item.children, item[keyAttr ?? 'key']);
        }
      }
    }

    loop(result, treeData, rootParentId);

    return result;
  },
  /**
   * arrayToAntdTree - array转换成Tree
   * @param arr
   * @param config
   */
  arrayToAntdTree(arr, config) {
    const {
      // 主键属性
      keyAttr,
      // title属性
      titleAttr,
      // parentId属性
      parentIdAttr,
      // root的parentId的值
      rootParentId,
    } = config;

    /**
     * findNodesByParentId
     * @param arr
     * @param parentId
     * @return {*}
     */
    function findNodesByParentId(arr, parentId: string | number) {
      return arr
        .filter((item) => item[parentIdAttr] == parentId)
        .map((item) => ({
          ...item,
          title: item[titleAttr],
          key: item[keyAttr],
          // isLeaf: true,
          children: [],
          properties: { ...item },
        }));
    }

    /**
     * Recursion
     * @constructor
     */
    function Recursion(node) {
      node.children = findNodesByParentId(arr, node.properties[keyAttr]);

      node.isLeaf = 'isLeaf' in node ? node.isLeaf : !node.children.length;

      if (node.isLeaf) {
        delete node.children;
      }

      (node.children || []).forEach((node) => {
        Recursion(node);
      });
    }

    const roots = findNodesByParentId(arr, rootParentId);

    roots.forEach((root) => {
      Recursion(root);
    });

    return roots;
  },
  /**
   * arrayToAntdTreeSelect - array转换成TreeSelect
   * @param arr
   * @param config
   */
  arrayToAntdTreeSelect(arr, config) {
    const { keyAttr, titleAttr, rootParentId, parentIdAttr } = config;

    /**
     * findNodesByParentId
     * @param arr
     * @param parentId
     * @return {*}
     */
    function findNodesByParentId(arr: IFlatTreeArrNode[], parentId: string | number) {
      return arr
        .filter((item) => item[parentIdAttr] == parentId)
        .map((item) => ({
          ...item,
          key: item[keyAttr],
          title: item[titleAttr],
          value: item[keyAttr],
          // isLeaf: true,
          children: [],
          properties: { ...item },
        }));
    }

    /**
     * Recursion
     * @constructor
     */
    function Recursion(node) {
      node.children = findNodesByParentId(arr, node.properties[keyAttr]);

      node.isLeaf = 'isLeaf' in node ? node.isLeaf : !node.children.length;

      if (node.isLeaf) {
        delete node.children;
      }

      (node.children || []).forEach((node) => {
        Recursion(node);
      });
    }

    const roots = findNodesByParentId(arr, rootParentId);

    roots.forEach((root) => {
      Recursion(root);
    });

    return roots;
  },
  /**
   * getAncestor - 获取祖先
   * @param data
   * @param node
   * @param config
   */
  getAncestor(data, node, config) {
    const result: any[] = [];

    let curNode = node;

    while (curNode && curNode[config.parentIdAttr] != config.rootParentId) {
      const item = data.find((t) => t[config.keyAttr] === curNode[config.parentIdAttr]);

      if (item) {
        result.push(item);
      }

      curNode = item;
    }

    return result;
  },
  /**
   * getDescendants
   * @description - 获取子孙
   */
  getDescendants(data, node, config) {
    function loop(n: any) {
      const children = data.filter((t) => t[config.parentIdAttr] === n[config.keyAttr]);
      children.forEach((t) => {
        result.push(t);
        loop(t);
      });
    }

    const result: any[] = [];

    loop(node);

    return result;
  },
  /**
   * completionIncompleteFlatArr
   * @description 补残缺的FlatArr
   */
  completionIncompleteFlatArr(this: TreeUtilType, treeFlatNodes, incompleteTreeFlatNodes, config) {
    let set = new Set<string>();

    incompleteTreeFlatNodes.forEach((t) => {
      const tops = this.getAncestor(treeFlatNodes, t, config);
      const tArr = [...(tops || [])].map((item) => item[config.keyAttr]);
      set = new Set<string>([...Array.from(set), ...tArr]);
    });

    set = new Set<string>([
      ...Array.from(set),
      ...incompleteTreeFlatNodes.map((t) => t[config.keyAttr]),
    ]);

    return this.arrayToAntdTree(
      [...Array.from(set)].map((t) => treeFlatNodes.find((item) => item[config.keyAttr] === t)),
      config,
    );
  },
  /**
   * filterTreeByFlatData
   * @description 本地过滤tree
   * @param treeFlatNodes
   * @param kw
   * @param config
   */
  filterTreeByFlatData(this: TreeUtilType, treeFlatNodes, kw, config) {
    const { filterAttr, ...arrayToAntdTreeConfig } = config;

    if (kw) {
      const arr = treeFlatNodes.filter((node) => {
        return node[config.filterAttr].indexOf(kw) !== -1;
      });

      return this.completionIncompleteFlatArr(treeFlatNodes, arr, config);
    } else {
      return this.arrayToAntdTree(treeFlatNodes, arrayToAntdTreeConfig);
    }
  },
  /**
   * filterTree
   * @description
   * @param treeNodes
   * @param kw
   * @param config
   */
  filterTree(this: TreeUtilType, treeNodes, kw, config) {
    const { filterAttr, ...arrayToAntdTreeConfig } = config;

    const treeFlatNodes = this.treeToArray(treeNodes, {
      parentIdAttr: config.parentIdAttr,
      rootParentId: config.rootParentId,
    });

    if (kw) {
      const arr = treeFlatNodes.filter((node) => {
        return node[config.filterAttr].indexOf(kw) !== -1;
      });

      return this.completionIncompleteFlatArr(treeFlatNodes, arr, config);
    } else {
      return this.arrayToAntdTree(treeFlatNodes, arrayToAntdTreeConfig);
    }
  },
  /**
   * findNodeByKey
   * @description - 根据keyAttr查找结点
   * @param treeData
   * @param val
   * @param config
   */
  findNodeByKey(treeData, val, config) {
    function findLoop(
      data: (IAntdTreeNode | IAntdTreeSelectNode)[],
    ): IAntdTreeNode | IAntdTreeSelectNode | null {
      let result: IAntdTreeNode | IAntdTreeSelectNode | null = null;

      for (let i = 0; i < data.length; i++) {
        if (data[i][config.keyAttr] === val) {
          result = data[i];
          break;
        } else {
          if (
            'children' in data[i] &&
            Array.isArray(data[i].children) &&
            data[i]?.children?.length
          ) {
            result = findLoop(data[i].children as (IAntdTreeNode | IAntdTreeSelectNode)[]);
            if (result) break;
          }
        }
      }

      return result;
    }

    return findLoop(treeData);
  },
  /**
   * findParentNodeByKey
   * @description 根据key查找parentNode
   * @param treeData
   * @param val
   * @param config
   */
  findParentNodeByKey(treeData, val, { keyAttr }) {
    let parentNode;

    function loop(_parentNode, _nodes) {
      for (let i = 0; i < _nodes.length; i++) {
        const _node = _nodes[i];

        if (_node[keyAttr] === val) {
          parentNode = _parentNode;
          break;
        } else {
          loop(_node, _node.children ?? []);

          if (parentNode) {
            break;
          }
        }
      }
    }

    loop(parentNode, treeData);

    return parentNode;
  },
  /**
   * transformTreeData
   * @description - 转换一个treeData为antd的TreeData
   * @param treeData
   * @param childrenAttr
   * @param onCallback
   * @return IAntdTreeNode[]
   */
  transformTreeData(treeData, childrenAttr, onCallback) {
    function loop(children) {
      const result: IAntdTreeNode[] = [];

      for (let i = 0; i < children.length; i++) {
        const node = children[i];

        node[childrenAttr || 'children'] = loop(node[childrenAttr || 'children']);

        result.push(onCallback(node));
      }

      return result;
    }

    return loop(treeData);
  },
  /**
   * getLeafNodes
   * @description 获取叶子节点
   */
  getLeafNodes(nodes = [], childrenAttr = 'children') {
    function loop(treeNodes, childrenAttr) {
      let result: any[] = [];

      for (let i = 0; i < treeNodes.length; i++) {
        const node = treeNodes[i];

        if (childrenAttr in node && Array.isArray(node[childrenAttr])) {
          // 有孩子
          result = [...result, ...loop(node[childrenAttr], childrenAttr)];
        } else {
          // 没有孩子就是叶子节点
          result.push(node);
        }
      }

      return result;
    }

    return loop(nodes || [], childrenAttr || 'children');
  },
  /**
   * getLeafNodesByIndex
   * @description 通过索引获取叶子节点的集合
   */
  getLeafNodesByIndex(nodes = [], childrenAttr = 'children', indexAttr = 'isLeaf') {
    function loop(treeNodes, childrenAttr, leafAttr) {
      let result: any[] = [];

      for (let i = 0; i < treeNodes.length; i++) {
        const node = treeNodes[i];

        if (leafAttr in node && typeof node[leafAttr] === 'boolean' && node[leafAttr]) {
          result.push(node);
        }

        if (childrenAttr in node && Array.isArray(node[childrenAttr])) {
          result = [...result, ...loop(node[childrenAttr], childrenAttr, leafAttr)];
        }
      }

      return result;
    }

    return loop(nodes || [], childrenAttr || 'children', indexAttr || 'isLeaf');
  },
  /**
   * getLeafNodeByFlatData
   * @description 获取叶子节点通过拉平的数据
   * @param arr
   * @param config
   */
  getLeafNodeByFlatData(arr, config) {
    const { parentIdAttr, keyAttr } = config;

    // 获取所有的parentId
    const parentIds = arr
      .filter((t) => parentIdAttr in t && t[parentIdAttr])
      .map((t) => t[parentIdAttr]);

    // 1,2,3 parentIds
    // 1,2,3,4,5 arr
    return arr.filter((t) => !parentIds.includes(t[keyAttr]));
  },
  /**
   * getLeafNodeByFlatDataToIndex
   * @description 获取叶子节点通过索引和拉平的数据
   * @param arr
   * @param indexAttr
   */
  getLeafNodeByFlatDataToIndex(arr, indexAttr = 'isLeaf') {
    return arr.filter((t) => typeof t[indexAttr || 'isLeaf'] === 'boolean' && t[indexAttr]);
  },
  /**
   * getTreeLevel
   * @description 获取树的层级
   */
  getTreeLevel(this: TreeUtilType, nodes = [], keyAttr = 'key') {
    const flat = this.treeToArray(
      nodes,
      {
        parentIdAttr: 'pid',
        rootParentId: -1,
      },
      keyAttr,
    );

    const config = {
      keyAttr,
      titleAttr: keyAttr,
      parentIdAttr: 'pid',
      rootParentId: -1,
    };

    const leafNodes = this.getLeafNodeByFlatData(flat, config);

    const levels: number[] = [];

    for (let i = 0; i < leafNodes.length; i++) {
      const leafNode = leafNodes[i];

      let level = 1;
      let pid = leafNode[config.parentIdAttr];
      while (pid !== -1) {
        pid = flat.find((node) => node[keyAttr] === pid)?.[config.parentIdAttr];
        level++;
      }

      levels.push(level);
    }

    return Math.max(...levels);
  },
  /**
   * getTreeLevelByIndex
   * @description 获取树的层级通过索引
   */
  getTreeLevelByIndex(this: TreeUtilType, nodes = [], indexAttr = 'isLeaf', keyAttr = 'key') {
    const config = {
      parentIdAttr: 'pid',
      rootParentId: -1,
    };

    const flat = this.treeToArray(nodes, config);

    const leafNodes = this.getLeafNodeByFlatDataToIndex(flat, indexAttr);

    const levels: number[] = [];

    for (let i = 0; i < leafNodes.length; i++) {
      const leafNode = leafNodes[i];

      let level = 1;
      let pid = leafNode[config.parentIdAttr];
      while (pid !== -1) {
        pid = flat.find((node) => node[keyAttr] === pid)?.[config.parentIdAttr];
        level++;
      }

      levels.push(level);
    }

    return Math.max(...levels);
  },
  /**
   * getTreeLevelToFlat
   * @description 获取树的层级通过拉平的数据
   */
  getTreeLevelToFlat(this: TreeUtilType, flatArr, config) {
    const leafNodes = this.getLeafNodeByFlatData(flatArr, config);

    const levels: number[] = [];

    for (let i = 0; i < leafNodes.length; i++) {
      const leafNode = leafNodes[i];

      let level = 1;
      let pid = leafNode[config.parentIdAttr];
      while (pid !== -1) {
        pid = flatArr.find((node) => node[config.keyAttr] === pid)?.[config.parentIdAttr];
        level++;
      }

      levels.push(level);
    }

    return Math.max(...levels);
  },
  /**
   * getTreeLevelByIndexToFlat
   * @description 获取树的层级通过拉平的数据和索引
   */
  getTreeLevelByIndexToFlat(this: TreeUtilType, flatArr, config, indexAttr) {
    const leafNodes = this.getLeafNodeByFlatDataToIndex(flatArr, indexAttr);

    const levels: number[] = [];

    for (let i = 0; i < leafNodes.length; i++) {
      const leafNode = leafNodes[i];

      let level = 1;
      let pid = leafNode[config.parentIdAttr];
      while (pid !== -1) {
        pid = flatArr.find((node) => node[config.keyAttr] === pid)?.[config.parentIdAttr];
        level++;
      }

      levels.push(level);
    }

    return Math.max(...levels);
  },
  /**
   * getNodeLevel
   * @description 获取节点所在的level
   * @param nodes
   * @param node
   * @param keyAttr
   */
  getNodeLevel(this: TreeUtilType, nodes, node, keyAttr = 'key') {
    let currentLevel = -1;

    let treeLevel = this.getTreeLevel(nodes, keyAttr);

    let children: any[] = nodes;

    for (let i = 0; i < treeLevel; i++) {
      if (children.find((t) => t[keyAttr] === node[keyAttr])) {
        currentLevel = i + 1;
        break;
      } else {
        children = children.map((t) => t.children || []).flat();
      }
    }

    return currentLevel;
  },
  /**
   * excludeAntdTreeNodes
   * @description 排除指定节点后形成一棵树
   * @param nodes
   * @param excludeKeys
   * @param keyAttr
   */
  excludeAntdTreeNodes(this: TreeUtilType, nodes, excludeKeys, keyAttr = 'key') {
    const config = {
      parentIdAttr: 'pid',
      rootParentId: -1,
    };

    const flatArr = this.treeToArray(nodes, config, keyAttr);

    let _excludeKeys: string[] = [];

    for (let i = 0; i < excludeKeys.length; i++) {
      const result = loop(excludeKeys[i]);
      _excludeKeys = [..._excludeKeys, ...result];
    }

    _excludeKeys = [..._excludeKeys, ...excludeKeys];

    const omitArr = flatArr.filter((node) => !_excludeKeys.includes(node[keyAttr] as string));

    function loop(excludeKey) {
      const childrenKeys = flatArr
        .filter((t) => t[config.parentIdAttr] === excludeKey)
        .map((t) => t[keyAttr]);

      let excludeKeys: string[] = childrenKeys as string[];

      for (let i = 0; i < childrenKeys.length; i++) {
        const result = loop(childrenKeys[i]);
        excludeKeys = [...excludeKeys, ...result];
      }

      return excludeKeys;
    }

    return this.completionIncompleteFlatArr(flatArr, omitArr, {
      keyAttr,
      titleAttr: 'title',
      parentIdAttr: config.parentIdAttr,
      rootParentId: config.rootParentId,
    });
  },
  /**
   * excludeAntdSelectTreeNodes
   * @description 排除指定节点后形成一棵树
   * @param nodes
   * @param excludeKeys
   * @param keyAttr
   */
  excludeAntdSelectTreeNodes(this: TreeUtilType, nodes, excludeKeys, keyAttr = 'key') {
    const config = {
      parentIdAttr: 'pid',
      rootParentId: -1,
    };

    const flatArr = this.treeToArray(nodes, config, keyAttr);

    let _excludeKeys: string[] = [];

    for (let i = 0; i < excludeKeys.length; i++) {
      const result = loop(excludeKeys[i]);
      _excludeKeys = [..._excludeKeys, ...result];
    }

    _excludeKeys = [..._excludeKeys, ...excludeKeys];

    const omitArr = flatArr.filter((node) => !_excludeKeys.includes(node[keyAttr] as string));

    function loop(excludeKey) {
      const childrenKeys = flatArr
        .filter((t) => t[config.parentIdAttr] === excludeKey)
        .map((t) => t[keyAttr]);

      let excludeKeys: string[] = childrenKeys as string[];

      for (let i = 0; i < childrenKeys.length; i++) {
        const result = loop(childrenKeys[i]);
        excludeKeys = [...excludeKeys, ...result];
      }

      return excludeKeys;
    }

    return this.completionIncompleteFlatArr(flatArr, omitArr, {
      keyAttr,
      titleAttr: 'title',
      parentIdAttr: config.parentIdAttr,
      rootParentId: config.rootParentId,
    });
  },
};

export default TreeUtil;

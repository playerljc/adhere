import { IAntdTreeNode, IFlatTreeArrNode } from './types';

export default {
  /**
   * treeToArray
   * @description tree数据转换成Array
   * @param treeData
   * @param config
   */
  treeToArray(
    treeData: IAntdTreeNode[],
    config: {
      parentIdAttr: string;
      rootParentId: string | number;
    },
  ): any[] {
    // key: string;
    // title: string;
    // isLeaf: boolean;
    // children?: IAntdTreeNode[];
    // properties?: any;
    const { parentIdAttr, rootParentId } = config;

    const result: any[] = [];

    function loop(context: any[], data: IAntdTreeNode[], parentId: string | number) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        result.push({
          ...item.properties,
          [parentIdAttr]: parentId,
        });

        if (item.children && Array.isArray(item.children) && item.children.length) {
          loop(context, item.children, item.key);
        }
      }
    }

    loop(result, treeData, rootParentId);

    return result;
  },
  /**
   * arrayToAntdTree - array转换成Tree
   * @param arr
   * @param keyAttr - id的属性
   * @param titleAttr - title的属性
   * @param parentIdAttr - parentId的属性
   * @param rootParentId - root的parentId值
   */
  arrayToAntdTree(
    arr: any[],
    { keyAttr, titleAttr, rootParentId, parentIdAttr }: IFlatTreeArrNode,
  ): {
    rootParentId: string | number;
    titleAttr: string;
    children: any[];
    keyAttr: string;
    parentIdAttr: string;
    title: any;
    isLeaf: boolean;
    key: any;
    properties: {
      rootParentId: string | number;
      titleAttr: string;
      keyAttr: string;
      parentIdAttr: string;
    };
  }[] {
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
          title: item[titleAttr],
          key: item[keyAttr],
          children: [],
          properties: { ...item },
          isLeaf: true,
        }));
    }

    /**
     * Recursion
     * @constructor
     */
    function Recursion(node) {
      node.children = findNodesByParentId(arr, node.properties[keyAttr]);
      node.isLeaf = !node.children.length;
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
   * @param keyAttr - id的属性
   * @param titleAttr - title的属性
   * @param parentIdAttr - parentId的属性
   * @param rootParentId - root的parentId值
   */
  arrayToAntdTreeSelect(
    arr: any[],
    { keyAttr, titleAttr, rootParentId, parentIdAttr }: IFlatTreeArrNode,
  ): {
    rootParentId: string | number;
    titleAttr: string;
    children: any[];
    keyAttr: string;
    parentIdAttr: string;
    title: any;
    value: any;
    isLeaf: boolean;
    key: any;
    properties: {
      rootParentId: string | number;
      titleAttr: string;
      keyAttr: string;
      parentIdAttr: string;
    };
  }[] {
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
          title: item[titleAttr],
          key: item[keyAttr],
          value: item[keyAttr],
          children: [],
          properties: { ...item },
          isLeaf: true,
        }));
    }

    /**
     * Recursion
     * @constructor
     */
    function Recursion(node) {
      node.children = findNodesByParentId(arr, node.properties[keyAttr]);
      node.isLeaf = !node.children.length;
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
  getAncestor(
    data: any[],
    node: any,
    config: { keyAttr: string; parentIdAttr: string; rootParentId: string | number },
  ): any[] {
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
  getDescendants(
    data: any[],
    node: any,
    config: { keyAttr: string; parentIdAttr: string; rootParentId: string | number },
  ): any[] {
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
   * filterTree - 本地过滤tree
   * @param data
   * @param kw
   * @param config
   */
  filterTree(
    data: any[],
    kw: string,
    config: {
      filterAttr: string;
      keyAttr: string;
      parentIdAttr: string;
      rootParentId: string | number;
      titleAttr: string;
    },
  ): {
    rootParentId: string | number;
    titleAttr: string;
    children: any[];
    keyAttr: string;
    parentIdAttr: string;
    title: any;
    isLeaf: boolean;
    key: any;
    properties: {
      rootParentId: string | number;
      titleAttr: string;
      keyAttr: string;
      parentIdAttr: string;
    };
  }[] {
    const { filterAttr, ...arrayToAntdTreeConfig } = config;

    if (kw) {
      let set = new Set<string>();

      const arr = data.filter((node) => {
        return node[config.filterAttr].indexOf(kw) !== -1;
      });

      arr.forEach((t) => {
        const tops = this.getAncestor(data, t, config);
        const tArr = [...(tops || [])].map((item) => item[config.keyAttr]);
        set = new Set<string>([...Array.from(set), ...tArr]);
      });

      set = new Set<string>([...Array.from(set), ...arr.map((t) => t[config.keyAttr])]);

      return this.arrayToAntdTree(
        [...Array.from(set)].map((t) => data.find((item) => item[config.keyAttr] === t)),
        arrayToAntdTreeConfig,
      );
    } else {
      return this.arrayToAntdTree(data, arrayToAntdTreeConfig);
    }
  },
  /**
   * findNodeByKey
   * @description - 根据keyAttr查找结点
   * @param treeData
   * @param val
   * @param config
   */
  findNodeByKey(treeData: IAntdTreeNode[], val, config: { keyAttr: string }): IAntdTreeNode | null {
    function findLoop(data: IAntdTreeNode[]): IAntdTreeNode | null {
      let result: IAntdTreeNode | null;

      for (let i = 0; i < data.length; i++) {
        if (data[i][config.keyAttr] === val) {
          result = data[i];
          break;
        } else {
          // @ts-ignore
          if ('children' in data[i] && Array.isArray(data[i].children) && data[i].children.length) {
            // @ts-ignore
            result = findLoop(data[i].children);
            if (result) break;
          }
        }
      }

      // @ts-ignore
      return result;
    }

    return findLoop(treeData);
  },
  /**
   * transformTreeData
   * @description - 转换一个treeData为antd的TreeData
   * @param treeData
   * @param onCallback
   * @return IAntdTreeNode[]
   */
  transformTreeData(treeData: any[], onCallback: (node: any) => IAntdTreeNode): IAntdTreeNode[] {
    function loop(children) {
      const result: IAntdTreeNode[] = [];

      for (let i = 0; i < children.length; i++) {
        const node = children[i];

        result.push(onCallback(node));
      }

      return result;
    }

    return loop(treeData);
  },
};

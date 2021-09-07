import { IAntdTreeNode, IFlatTreeArrNode, IAntdTreeSelectNode } from './types';

export default {
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
  ): Array<IAntdTreeNode> {
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
          title: item[titleAttr],
          key: item[keyAttr],
          children: [],
          props: { ...item },
          isLeaf: true,
        }));
    }

    /**
     * Recursion
     * @constructor
     */
    function Recursion(node) {
      node.children = findNodesByParentId(arr, node.props[keyAttr]);
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
  ): Array<IAntdTreeSelectNode> {
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
          label: item[titleAttr],
          key: item[keyAttr],
          value: item[keyAttr],
          children: [],
          props: { ...item },
          isLeaf: true,
        }));
    }

    /**
     * Recursion
     * @constructor
     */
    function Recursion(node) {
      node.children = findNodesByParentId(arr, node.props[keyAttr]);
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
    config: { keyAttr: string; parentIdAttr: string; rootParentId: string },
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
      rootParentId: string;
      titleAttr: string;
    },
  ): Array<IAntdTreeNode> {
    const { filterAttr, ...arrayToAntdTreeConfig } = config;

    if (kw) {
      let set = new Set<string>();

      const arr = data.filter((node) => {
        return node[config.filterAttr].indexOf(kw) !== -1;
      });

      arr.forEach((t) => {
        const tops = this.getAncestor(data, t, config);
        const tArr = [...(tops || [])].map((item) => item[config.keyAttr]);
        set = new Set<string>([...set, ...tArr]);
      });

      set = new Set<string>([...set, ...arr.map((t) => t[config.keyAttr])]);

      return this.arrayToAntdTree(
        [...set].map((t) => data.find((item) => item[config.keyAttr] === t)),
        arrayToAntdTreeConfig,
      );
    } else {
      return this.arrayToAntdTree(data, arrayToAntdTreeConfig);
    }
  },
};

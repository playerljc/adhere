import Util from '@baifendian/adhere-util';

import type { TreeData, TreeDataItemExtra } from './types';

/**
 * useUtil
 */
function useUtil() {
  /**
   * getTreeNodesByKeys
   * @description 通过keys获取item
   * @param {{treeData: TreeData, keys: string[]}} params
   * @return {TreeDataItemExtra[]}
   */
  function getTreeNodesByKeys({
    treeData,
    keys,
  }: {
    treeData: TreeData;
    keys: string[];
  }): TreeDataItemExtra[] {
    // @ts-ignore
    return keys.map((key) => Util.findNodeByKey(treeData, key, { keyAttr: 'key' }));
  }

  /**
   * getLeafKeys
   * @description 获取叶子结点的keys
   * @param {{treeData: TreeData, keys: string[]}} params
   * @return {string[]}
   */
  function getLeafKeys({ treeData, keys }: { treeData: TreeData; keys: string[] }): string[] {
    const leafKeys = Util.getLeafNodes(treeData).map(({ key }) => key);
    return keys.filter((key) => leafKeys.includes(key));
  }

  return {
    getTreeNodesByKeys,
    getLeafKeys,
  };
}

export default useUtil;

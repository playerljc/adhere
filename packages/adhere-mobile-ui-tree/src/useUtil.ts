import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import { DEFAULT_TREE_UTIL_CONFIG } from './Constant';
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
    // @ts-ignore
    const leafKeys = Util.getLeafNodes(treeData).map(
      (nodeData) => nodeData[DEFAULT_TREE_UTIL_CONFIG.keyAttr],
    );
    return keys.filter((key) => leafKeys.includes(key));
  }

  /**
   * omitDisabledKeys
   * @description 排除不可用的keys
   * @param {TreeData} treeData
   * @param {string[]} keys
   * @return {string[]}
   */
  function omitDisabledKeys(treeData: TreeData, keys: string[]): string[] {
    const nodes = keys
      // @ts-ignore
      .map((key) => Util.findNodeByKey(treeData, key, { keyAttr: 'key' }))
      .filter((t) => !!t);

    if (nodes.length !== keys.length) {
      return keys;
    }

    return nodes
      .filter((node) => {
        if (node && !('disabled' in node)) return true;

        return !node?.disabled;
      })
      .map((node) => node?.[DEFAULT_TREE_UTIL_CONFIG.keyAttr] as string);
  }

  function getValueWithUnit(
    pixel: number | string | undefined | null,
    media: ConfigProviderProps['media'],
  ) {
    if (!pixel) return pixel;

    if (Util.isString(pixel)) return pixel;

    const value = getValue(pixel as number, media);

    if (media?.isUseMedia) {
      return `${value}rem`;
    }

    return `${value}px`;
  }

  function getValue(
    pixel: number,
    media: ConfigProviderProps['media'] = { isUseMedia: false, designWidth: 192 },
  ) {
    if (media?.isUseMedia) {
      return Util.pxToRemNumber(pixel, media.designWidth as number);
    }

    return pixel;
  }

  function checkTreeDataSimpleModeFromObject(treeDataSimpleMode: any) {
    if (
      'keyAttr' in treeDataSimpleMode &&
      'titleAttr' in treeDataSimpleMode &&
      'parentIdAttr' in treeDataSimpleMode &&
      'rootParentId' in treeDataSimpleMode
    ) {
    }
  }

  return {
    getTreeNodesByKeys,
    getLeafKeys,
    getValueWithUnit,
    getValue,
    omitDisabledKeys,
    checkTreeDataSimpleModeFromObject,
  };
}

export default useUtil;

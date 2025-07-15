import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import { DEFAULT_TREE_UTIL_CONFIG } from './Constant';
import type { TreeData, TreeDataItemExtra } from './types';

/**
 * 树组件工具函数 Hook
 * @returns 包含各种工具函数的对象
 */
function useUtil() {
  /**
   * 通过keys获取树节点
   * @param params - 参数对象
   * @param params.treeData - 树数据
   * @param params.keys - 要查找的键数组
   * @returns 找到的树节点数组
   */
  function getTreeNodesByKeys({
    treeData,
    keys,
  }: {
    treeData: TreeData;
    keys: string[];
  }): TreeDataItemExtra[] {
    return keys
      .map((key) => Util.findNodeByKey(treeData as any, key, { keyAttr: 'key' }))
      .filter((node): node is TreeDataItemExtra => node !== null && node !== undefined);
  }

  /**
   * 获取叶子节点的keys
   * @param params - 参数对象
   * @param params.treeData - 树数据
   * @param params.keys - 要过滤的键数组
   * @returns 叶子节点的键数组
   */
  function getLeafKeys({ treeData, keys }: { treeData: TreeData; keys: string[] }): string[] {
    const leafKeys = Util.getLeafNodes(treeData as any).map(
      (nodeData) => nodeData[DEFAULT_TREE_UTIL_CONFIG.keyAttr],
    );
    return keys.filter((key) => leafKeys.includes(key));
  }

  /**
   * 排除不可用的keys
   * @param treeData - 树数据
   * @param keys - 要过滤的键数组
   * @returns 过滤后的键数组
   */
  function omitDisabledKeys(treeData: TreeData, keys: string[]): string[] {
    const nodes = keys
      .map((key) => Util.findNodeByKey(treeData as any, key, { keyAttr: 'key' }))
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

  /**
   * 获取带单位的数值
   * @param pixel - 像素值
   * @param media - 媒体配置
   * @returns 带单位的字符串值
   */
  function getValueWithUnit(
    pixel: number | string | undefined | null,
    media: ConfigProviderProps['media'],
  ): string | number | undefined | null {
    if (!pixel) return pixel;

    if (Util.isString(pixel)) return pixel;

    const value = getValue(pixel as number, media);

    if (media?.isUseMedia) {
      return `${value}rem`;
    }

    return `${value}px`;
  }

  /**
   * 根据媒体配置获取数值
   * @param pixel - 像素值
   * @param media - 媒体配置
   * @returns 转换后的数值
   */
  function getValue(
    pixel: number,
    media: ConfigProviderProps['media'] = { isUseMedia: false, designWidth: 192 },
  ): number {
    if (media?.isUseMedia) {
      return Util.pxToRemNumber(pixel, media.designWidth as number);
    }

    return pixel;
  }

  /**
   * 检查简单模式配置对象是否完整
   * @param treeDataSimpleMode - 简单模式配置对象
   * @returns 是否为有效的简单模式配置
   */
  function checkTreeDataSimpleModeFromObject(treeDataSimpleMode: Record<string, any> = {}): boolean {
    return (
      'keyAttr' in treeDataSimpleMode &&
      'titleAttr' in treeDataSimpleMode &&
      'parentIdAttr' in treeDataSimpleMode &&
      'rootParentId' in treeDataSimpleMode
    );
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

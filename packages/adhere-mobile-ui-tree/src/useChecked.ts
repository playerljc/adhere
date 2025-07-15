import uniq from 'lodash.uniq';

import Util from '@baifendian/adhere-util';

import { DEFAULT_TREE_UTIL_CONFIG } from './Constant';
import type { TreeData, TreeDataItem } from './types';

/**
 * 树节点选中状态管理 Hook
 * @returns 包含选中状态管理函数的对象
 */
function useChecked() {
  /**
   * 过滤目标子节点（排除不可选中和禁用的节点）
   * @param children - 子节点数组
   * @returns 过滤后的子节点数组
   */
  function targetChildren(children?: TreeData): TreeDataItem[] {
    if (!children) return [];
    
    // 过滤出 TreeDataItem 类型（排除 TreeDataFlatItem）
    const treeDataItems = children.filter((node): node is TreeDataItem => 
      'children' in node
    );
    
    // 使用 any 类型临时解决 readonly 类型问题
    return (treeDataItems as any)
      .filter((node: any) => {
        if (!('checkable' in node)) return true;
        return node.checkable;
      })
      .filter((node: any) => {
        if (!('disabled' in node)) return true;
        return !node.disabled;
      });
  }

  /**
   * 递归获取所有子节点的key
   * @param node - 触发时候的节点数据
   * @returns 子节点的键数组
   */
  function getChildrenKeys(node: TreeDataItem): string[] {
    let keys = [node[DEFAULT_TREE_UTIL_CONFIG.keyAttr]];

    const children = targetChildren(node.children ?? []);

    if (children) {
      children.forEach((child) => {
        keys = keys.concat(getChildrenKeys(child));
      });
    }

    return keys;
  }

  /**
   * 获取受控状态下的defaultCheckedKeys
   * @param treeData - 树数据
   * @param defaultCheckedKeys - 默认选中的键数组
   * @returns 处理后的选中键数组
   */
  function getDefaultCheckedKeysWithCheckStrictly(
    treeData: TreeData,
    defaultCheckedKeys: string[],
  ): string[] {
    const checkedKeys: string[] = [...defaultCheckedKeys];

    /**
     * 向上更新父节点状态
     * @param params - 更新参数
     */
    function up({
      key,
      checkedKeys,
      parentId,
      childrenData,
    }: {
      key: string;
      checkedKeys: string[];
      parentId: string;
      childrenData?: TreeData;
    }): void {
      // 过滤出 TreeDataItem 类型并处理
      const treeDataItems = childrenData?.filter((node): node is TreeDataItem => 
        'children' in node
      ) ?? [];
      
      const childrenKeys = treeDataItems
        .filter(({ key: itemKey }) => itemKey !== key)
        .map((node) => node[DEFAULT_TREE_UTIL_CONFIG.keyAttr]) ?? [];

      let selfChecked: boolean;

      selfChecked = childrenKeys.every((key) => checkedKeys.includes(key));

      if (selfChecked) {
        if (!checkedKeys.includes(parentId)) {
          checkedKeys.push(parentId);
        }
      }

      const parentNodeData = Util.findParentNodeByKey(treeData as any, parentId, {
        keyAttr: DEFAULT_TREE_UTIL_CONFIG.keyAttr,
      });

      if (parentNodeData) {
        up({
          key: parentId,
          checkedKeys,
          parentId: parentNodeData.key,
          childrenData: targetChildren(parentNodeData.children),
        });
      }
    }

    defaultCheckedKeys.forEach((checkedKey) => {
      const nodeData = Util.findNodeByKey(treeData as any, checkedKey, {
        keyAttr: DEFAULT_TREE_UTIL_CONFIG.keyAttr,
      });

      if (nodeData) {
        const descendants = getChildrenKeys(nodeData);
        // 自己加子孙 向下所有的
        checkedKeys.push(checkedKey, ...descendants);
      }

      const parentNodeData = Util.findParentNodeByKey(treeData as any, checkedKey, {
        keyAttr: DEFAULT_TREE_UTIL_CONFIG.keyAttr,
      });

      if (parentNodeData) {
        up({
          key: checkedKey,
          checkedKeys,
          parentId: parentNodeData.key,
          childrenData: targetChildren(parentNodeData.children),
        });
      }
    });

    return uniq(checkedKeys);
  }

  /**
   * 向上处理父节点选中状态
   * @param params - 处理参数
   */
  function updateParentChecked({
    key,
    checked,
    checkedKeys,
    parentId,
    childrenData,
    next,
  }: {
    key: string;
    checked: boolean;
    checkedKeys: string[];
    parentId: string;
    childrenData?: TreeDataItem[];
    next?: (params: { key: string; checked: boolean; checkedKeys: string[] }) => void;
  }): void {
    let selfChecked = false;

    // 将 TreeDataItem[] 转换为 TreeData 类型
    const targetChildrenData = targetChildren(childrenData as TreeData);

    if (checked) {
      const childrenKeys = targetChildrenData
        ?.filter(({ key: itemKey }) => itemKey !== key)
        .map(({ key }) => key) ?? [];

      selfChecked = childrenKeys.every((key) => checkedKeys.includes(key));

      if (selfChecked) {
        if (!checkedKeys.includes(parentId)) {
          checkedKeys.push(parentId);
        }
      }
    } else {
      if (checkedKeys.includes(parentId)) {
        checkedKeys.splice(
          checkedKeys.findIndex((itemKey) => itemKey === parentId),
          1,
        );
      }
    }

    // 调用parent的updateParentChecked
    next?.({ key: parentId, checked: selfChecked, checkedKeys });
  }

  /**
   * 处理选中逻辑
   * @param params - 处理参数
   */
  function handleCheck({
    node,
    checked,
    checkedKeys,
    checkStrictly,
    next,
  }: {
    node: TreeDataItem;
    checked: boolean;
    checkedKeys: string[];
    checkStrictly: boolean;
    next?: (params: { key: string; checked: boolean; checkedKeys: string[] }) => void;
  }): void {
    // 不受控
    if (!checkStrictly) {
      if (checked) {
        if (!checkedKeys.includes(node[DEFAULT_TREE_UTIL_CONFIG.keyAttr])) {
          checkedKeys.push(node[DEFAULT_TREE_UTIL_CONFIG.keyAttr]);
        }
      } else {
        if (checkedKeys.includes(node[DEFAULT_TREE_UTIL_CONFIG.keyAttr])) {
          checkedKeys.splice(checkedKeys.indexOf(node[DEFAULT_TREE_UTIL_CONFIG.keyAttr]), 1);
        }
      }
      return;
    }

    // 获取当前节点子孙的keys
    const childrenKeys = getChildrenKeys(node);

    if (checked) {
      // 添加当前节点及其子节点
      childrenKeys.forEach((key) => {
        if (!checkedKeys.includes(key)) {
          checkedKeys.push(key);
        }
      });
    } else {
      // 移除当前节点及其子节点
      childrenKeys.forEach((key) => {
        const index = checkedKeys.indexOf(key);
        if (index > -1) {
          checkedKeys.splice(index, 1);
        }
      });
    }

    // 更新父节点的状态
    next?.({
      key: node[DEFAULT_TREE_UTIL_CONFIG.keyAttr],
      checked,
      checkedKeys,
    });
  }

  /**
   * 在parentChildren中是否存在checkable的节点
   * @param children - 子节点数组
   * @returns 是否存在可选中节点
   */
  function existsCheckableNodeInParentChildren(children?: Readonly<TreeDataItem[]>): boolean {
    if (!children) return false;
    return children?.some((node) => {
      if (!('checkable' in node)) return true;
      return !!node.checkable;
    });
  }

  return {
    handleCheck,
    updateParentChecked,
    existsCheckableNodeInParentChildren,
    getDefaultCheckedKeysWithCheckStrictly,
  };
}

export default useChecked;

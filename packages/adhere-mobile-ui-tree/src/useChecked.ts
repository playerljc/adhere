import uniq from 'lodash.uniq';

import Util from '@baifendian/adhere-util';

import { DEFAULT_TREE_UTIL_CONFIG } from './Constant';
import type { TreeData, TreeDataItem } from './types';

/**
 * useChecked
 */
function useChecked() {
  function targetChildren(children) {
    return children
      ?.filter((node) => {
        if (!('checkable' in node)) return true;

        return node.checkable;
      })
      ?.filter((node) => {
        if (!('disabled' in node)) return true;

        return !node.disabled;
      });
  }

  /**
   * getChildrenKeys
   * @description 递归获取所有子节点的key
   * @param {TreeDataItem} node 触发时候的节点数据
   * @return {string[]}
   */
  function getChildrenKeys(node) {
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
   * getDefaultCheckedKeysWithCheckStrictly
   * @description 获取受控状态下的defaultCheckedKeys
   * @param {TreeData} treeData
   * @param {string[]} defaultCheckedKeys
   * @return {string[]}
   */
  function getDefaultCheckedKeysWithCheckStrictly(
    treeData: TreeData,
    defaultCheckedKeys: string[],
  ): string[] {
    const checkedKeys: string[] = [...defaultCheckedKeys];

    function up({ key, checkedKeys, parentId, childrenData }) {
      const childrenKeys = childrenData
        ?.filter(({ key: itemKey }) => itemKey !== key)
        .map((node) => node[DEFAULT_TREE_UTIL_CONFIG.keyAttr]);

      let selfChecked: boolean;

      selfChecked = childrenKeys.every((key) => checkedKeys.includes(key));

      if (selfChecked) {
        if (!checkedKeys.includes(parentId)) {
          checkedKeys.push(parentId);
        }
      }

      // @ts-ignore
      const parentNodeData = Util.findParentNodeByKey(treeData, parentId, {
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
      // @ts-ignore
      const nodeData = Util.findNodeByKey(treeData, checkedKey, {
        keyAttr: DEFAULT_TREE_UTIL_CONFIG.keyAttr,
      });

      if (nodeData) {
        const descendants = getChildrenKeys(nodeData);
        // 自己加子孙 向下所有的
        checkedKeys.push(checkedKey, ...descendants);
      }

      // @ts-ignore
      const parentNodeData = Util.findParentNodeByKey(treeData, checkedKey, {
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
   * updateParentChecked
   * @description 向上处理
   * @param {string} key 触发checked的节点key
   * @param {boolean} checked 触发的时候选中状态
   * @param {string[]} checkedKeys 存放所有checked的keys
   * @param {string} parentId key的父亲key
   * @param {TreeDataItem[]} childrenData key父亲的孩子
   * @param {updateParentChecked} next updateParentChecked
   */
  function updateParentChecked({ key, checked, checkedKeys, parentId, childrenData, next }) {
    // console.log('key', key);
    // console.log('parentId', parentId);
    // console.log('childrenData', childrenData);
    // console.log('checked', checked);

    let selfChecked = false;

    const targetChildrenData = targetChildren(childrenData);

    if (checked) {
      const childrenKeys = targetChildrenData
        ?.filter(({ key: itemKey }) => itemKey !== key)
        .map(({ key }) => key);

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
    next?.({ [DEFAULT_TREE_UTIL_CONFIG.keyAttr]: parentId, checked: selfChecked, checkedKeys });
  }

  /**
   * handleCheck
   * @description 处理选中逻辑
   * @param {TreeDataItem} node 触发的节点nodeData
   * @param {boolean} checked 触发的时候选中状态
   * @param {string[]} checkedKeys 存放所有checked的keys
   * @param {boolean} checkStrictly 是否受控
   * @param {updateParentChecked} next
   */
  function handleCheck({ node, checked, checkedKeys, checkStrictly, next }) {
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
      [DEFAULT_TREE_UTIL_CONFIG.keyAttr]: node[DEFAULT_TREE_UTIL_CONFIG.keyAttr],
      checked,
      checkedKeys,
    });
  }

  /**
   * existsCheckableNodeInParentChildren
   * @description 在parentChildren中是否存在checkable的节点
   * @param children
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

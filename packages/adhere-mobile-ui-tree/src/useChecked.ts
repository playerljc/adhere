/**
 * useChecked
 */
function useChecked() {
  /**
   * getChildrenKeys
   * @description 递归获取所有子节点的key
   * @param {{key: string; children: any[]}} node
   * @return {string[]}
   */
  function getChildrenKeys(node) {
    let keys = [node.key];

    if (node.children) {
      node.children.forEach((child) => {
        keys = keys.concat(getChildrenKeys(child));
      });
    }

    return keys;
  }

  /**
   * updateParentChecked
   * @description 向上处理
   * @param key 触发checked的节点key
   * @param checked 触发的时候选中状态
   * @param checkedKeys 存放所有checked的keys
   * @param parentId key的父亲key
   * @param treeNodeData key父亲的孩子
   * @param next updateParentChecked
   */
  function updateParentChecked({ key, checked, checkedKeys, parentId, childrenData, next }) {
    // console.log('key', key);
    // console.log('parentId', parentId);
    // console.log('childrenData', childrenData);
    // console.log('checked', checked);

    let selfChecked = false;

    if (checked) {
      const childrenKeys = childrenData
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
    next?.({ key: parentId, checked: selfChecked, checkedKeys });
  }

  /**
   * handleCheck
   * @description 处理选中逻辑
   * @param {string[]} checkedKeys
   * @param {boolean} checked
   * @param node
   * @param next
   */
  function handleCheck({ checkedKeys, checked, node, next }) {
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
    next?.({ key: node.key, checked, checkedKeys });
  }

  return {
    handleCheck,
    updateParentChecked,
  };
}

export default useChecked;

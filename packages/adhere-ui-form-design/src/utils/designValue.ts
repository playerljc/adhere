import clone from 'rfdc';

import type { DesignValue } from '../types';

/**
 * findDesignValueById
 * @description 递归查找设计值中指定id的设计值
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {DesignValue | undefined}
 */
export function findDesignValueById(id: string, designValue: DesignValue): DesignValue | undefined {
  if (designValue.id === id) {
    return designValue;
  }

  if (designValue.props.children) {
    for (let i = 0; i < designValue.props.children.length; i++) {
      const child = designValue.props.children[i];
      const result = findDesignValueById(id, child);
      if (result) return result;
    }
  }
}

/**
 * deleteDesignValueByIdInChildren
 * @description 递归删除设计值中指定id的children元素
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {boolean} 是否删除成功
 */
export function deleteDesignValueByIdInChildren(id: string, designValue: DesignValue): boolean {
  if (!designValue.props.children || !designValue.props.children.length) return false;

  const { children } = designValue.props;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.id === id) {
      children.splice(i, 1);
      return true;
    }
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const deleted = deleteDesignValueByIdInChildren(id, child);
    if (deleted) {
      return true;
    }
  }

  return false;
}

/**
 * findDesignValueByIdToClone
 * @description 递归查找设计值中指定id的设计值的clone版本
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {DesignValue | undefined}
 */
export function findDesignValueByIdToClone(
  id: string,
  designValue: DesignValue,
): DesignValue | undefined {
  const _designValue = findDesignValueById(id, designValue);

  if (!!_designValue) {
    return clone()(_designValue);
  }

  return _designValue;
}

/**
 * findParentIdById
 * @description 获取id的父亲id
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {string | undefined}
 */
export function findParentIdById(id: string, designValue: DesignValue): string | undefined {
  if (!designValue.props.children || !designValue.props.children.length) return;

  for (let i = 0; i < designValue.props.children.length; i++) {
    const child = designValue.props.children[i];
    if (child.id === id) {
      return designValue.id;
    }

    const parentId = findParentIdById(id, child);
    if (parentId) {
      return parentId;
    }
  }
}

/**
 * findParentDesignValueById
 * @description 递归查找设计值中指定id的父级设计值
 * @param {string} id - 目标子节点的ID
 * @param {DesignValue} designValue - 当前遍历的设计值节点
 * @return {DesignValue | undefined} 找到的父级设计值，未找到返回 undefined
 */
export function findParentDesignValueById(
  id: string,
  designValue: DesignValue,
): DesignValue | undefined {
  if (!designValue.props.children || !designValue.props.children.length) {
    return undefined;
  }

  for (let i = 0; i < designValue.props.children.length; i++) {
    const child = designValue.props.children[i];
    // 如果当前子节点就是目标节点，则当前节点(designValue)即为父节点
    if (child.id === id) {
      return designValue;
    }

    // 递归在子节点中查找
    const parentDesignValue = findParentDesignValueById(id, child);
    if (parentDesignValue) {
      return parentDesignValue;
    }
  }

  return undefined;
}

/**
 * genNewName
 * @description 生成新的不重复的名称，基于 name 参数 + copy 直到 designValue 没有这个 name 为止
 * @param {string} name - 基础名称
 * @param {DesignValue} designValue - 设计值
 * @return {string} 生成的新名称
 */
export function genNewName(name: string, designValue: DesignValue): string {
  // 收集所有已存在的名称
  const existingNames = new Set<string>();

  // 递归收集所有字段的 name
  function collectNames(value: DesignValue) {
    const fieldName = value.props?.formItemProps?.name;
    if (fieldName) {
      existingNames.add(fieldName);
    }

    if (value.props?.children && value.props.children.length > 0) {
      for (const child of value.props.children) {
        collectNames(child);
      }
    }
  }

  collectNames(designValue);

  // 如果当前名称不存在，直接返回
  if (!existingNames.has(name)) {
    return name;
  }

  // 如果存在，则添加 copy 后缀，直到找到不重复的名称
  let newName = name;
  let copyCount = 1;

  while (existingNames.has(newName)) {
    newName = `${name}_copy${copyCount}`;
    copyCount++;
  }

  return newName;
}

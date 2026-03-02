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
      if (result) {
        return result;
      }
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

  const index = children.findIndex((child) => child.id === id);

  if (index > -1) {
    children.splice(index, 1);
    return true;
  }

  for (let i = 0; i < children.length; i++) {
    const deleted = deleteDesignValueByIdInChildren(id, children[i]);
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


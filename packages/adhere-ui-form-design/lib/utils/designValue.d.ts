import type { DesignValue } from '../types';
/**
 * findDesignValueById
 * @description 递归查找设计值中指定id的设计值
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {DesignValue | undefined}
 */
export declare function findDesignValueById(id: string, designValue: DesignValue): DesignValue | undefined;
/**
 * deleteDesignValueByIdInChildren
 * @description 递归删除设计值中指定id的children元素
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {boolean} 是否删除成功
 */
export declare function deleteDesignValueByIdInChildren(id: string, designValue: DesignValue): boolean;
/**
 * findDesignValueByIdToClone
 * @description 递归查找设计值中指定id的设计值的clone版本
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {DesignValue | undefined}
 */
export declare function findDesignValueByIdToClone(id: string, designValue: DesignValue): DesignValue | undefined;
/**
 * findParentIdById
 * @description 获取id的父亲id
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {string | undefined}
 */
export declare function findParentIdById(id: string, designValue: DesignValue): string | undefined;
/**
 * findParentDesignValueById
 * @description 递归查找设计值中指定id的父级设计值
 * @param {string} id - 目标子节点的ID
 * @param {DesignValue} designValue - 当前遍历的设计值节点
 * @return {DesignValue | undefined} 找到的父级设计值，未找到返回 undefined
 */
export declare function findParentDesignValueById(id: string, designValue: DesignValue): DesignValue | undefined;
/**
 * genNewName
 * @description 生成新的不重复的名称，基于 name 参数 + copy 直到 designValue 没有这个 name 为止
 * @param {string} name - 基础名称
 * @param {DesignValue} designValue - 设计值
 * @return {string} 生成的新名称
 */
export declare function genNewName(name: string, designValue: DesignValue): string;

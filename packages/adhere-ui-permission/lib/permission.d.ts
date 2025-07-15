import React from 'react';
import type { FC } from 'react';
import type { PermissionFunction, PermissionProps, PermissionSetter, PermissionGetter, PermissionChecker } from './types';
/**
 * 设置拥有的所有权限
 * @description 用于初始化或更新全局权限列表
 * @param {string[]} permission - 权限列表
 * @example
 * ```typescript
 * setPermission(['read', 'write', 'delete']);
 * ```
 */
export declare const setPermission: PermissionSetter;
/**
 * 获取拥有的所有权限
 * @description 返回当前权限列表的深拷贝，避免外部修改影响内部状态
 * @returns {string[]} 权限列表的副本
 * @example
 * ```typescript
 * const currentPermissions = getPermission();
 * console.log(currentPermissions); // ['read', 'write']
 * ```
 */
export declare const getPermission: PermissionGetter;
/**
 * 判断是否有权限
 * @description 检查当前用户是否拥有指定的权限
 * @param {string[]} [allPermission=getPermission()] - 所有可用权限列表，默认为全局权限
 * @param {string | string[]} [currentPermissions] - 当前组件或页面需要的权限
 * @returns {boolean} 是否有权限
 * @example
 * ```typescript
 * // 检查单个权限
 * const hasReadPermission = checkPermission(undefined, 'read');
 *
 * // 检查多个权限（需要全部满足）
 * const hasAllPermissions = checkPermission(undefined, ['read', 'write']);
 *
 * // 使用自定义权限列表
 * const hasPermission = checkPermission(['admin', 'user'], 'admin');
 * ```
 */
export declare const checkPermission: PermissionChecker;
/**
 * 权限组件
 * @description 根据权限条件渲染不同的内容
 * @param {PermissionProps} props - 组件属性
 * @returns {React.ReactElement | null} 渲染结果
 * @example
 * ```typescript
 * // 基本用法
 * <Permission permissions="read" noMatch={() => <div>无权限访问</div>}>
 *   <div>有权限的内容</div>
 * </Permission>
 *
 * // 检查多个权限
 * <Permission permissions={['read', 'write']} noMatch={() => <div>权限不足</div>}>
 *   <div>需要读写权限的内容</div>
 * </Permission>
 *
 * // 使用自定义权限列表
 * <Permission
 *   allPermission={['admin', 'user']}
 *   permissions="admin"
 *   noMatch={() => <div>需要管理员权限</div>}
 * >
 *   <div>管理员专用内容</div>
 * </Permission>
 * ```
 */
export declare const Permission: FC<PermissionProps>;
/**
 * 权限函数
 * @description 函数式权限检查，根据权限条件返回不同的值
 * @param {PermissionFunction} params - 权限函数配置
 * @returns {React.ReactNode} 返回结果
 * @example
 * ```typescript
 * // 基本用法
 * const result = PermissionFun({
 *   permissions: 'read',
 *   match: '有权限',
 *   noMatch: '无权限'
 * });
 *
 * // 检查多个权限
 * const result = PermissionFun({
 *   permissions: ['read', 'write'],
 *   match: '有读写权限',
 *   noMatch: '权限不足'
 * });
 *
 * // 使用自定义权限列表
 * const result = PermissionFun({
 *   allPermission: ['admin', 'user'],
 *   permissions: 'admin',
 *   match: '管理员权限',
 *   noMatch: '需要管理员权限'
 * });
 *
 * // 返回JSX
 * const element = PermissionFun({
 *   permissions: 'read',
 *   match: <div>有权限的内容</div>,
 *   noMatch: <div>无权限访问</div>
 * });
 * ```
 */
export declare function PermissionFun({ allPermission, permissions, match, noMatch, }: PermissionFunction): React.ReactNode;
/**
 * 权限工具函数集合
 */
export declare const PermissionUtils: {
    /**
     * 检查是否包含任意一个权限
     * @description 检查用户是否拥有权限列表中的任意一个权限
     * @param {string[]} [allPermission=getPermission()] - 所有可用权限列表
     * @param {string[]} permissions - 需要检查的权限列表
     * @returns {boolean} 是否包含任意一个权限
     * @example
     * ```typescript
     * const hasAnyPermission = PermissionUtils.hasAnyPermission(
     *   undefined,
     *   ['read', 'write', 'delete']
     * );
     * ```
     */
    hasAnyPermission: (allPermission: string[] | undefined, permissions: string[]) => boolean;
    /**
     * 检查是否包含所有权限
     * @description 检查用户是否拥有权限列表中的所有权限（与checkPermission功能相同）
     * @param {string[]} [allPermission=getPermission()] - 所有可用权限列表
     * @param {string[]} permissions - 需要检查的权限列表
     * @returns {boolean} 是否包含所有权限
     * @example
     * ```typescript
     * const hasAllPermissions = PermissionUtils.hasAllPermissions(
     *   undefined,
     *   ['read', 'write']
     * );
     * ```
     */
    hasAllPermissions: (allPermission: string[] | undefined, permissions: string[]) => boolean;
    /**
     * 获取权限交集
     * @description 获取用户权限与所需权限的交集
     * @param {string[]} [allPermission=getPermission()] - 所有可用权限列表
     * @param {string[]} permissions - 需要检查的权限列表
     * @returns {string[]} 权限交集
     * @example
     * ```typescript
     * const intersection = PermissionUtils.getPermissionIntersection(
     *   ['read', 'write', 'delete'],
     *   ['read', 'write', 'admin']
     * );
     * // 结果: ['read', 'write']
     * ```
     */
    getPermissionIntersection: (allPermission: string[] | undefined, permissions: string[]) => string[];
    /**
     * 检查权限是否为空
     * @description 检查权限列表是否为空或未定义
     * @param {string[]} permissions - 权限列表
     * @returns {boolean} 是否为空
     * @example
     * ```typescript
     * const isEmpty = PermissionUtils.isEmpty([]);
     * const isNotEmpty = PermissionUtils.isEmpty(['read', 'write']);
     * ```
     */
    isEmpty: (permissions: string[]) => boolean;
    /**
     * 验证权限格式
     * @description 验证权限字符串是否为有效格式
     * @param {string} permission - 权限字符串
     * @returns {boolean} 是否为有效格式
     * @example
     * ```typescript
     * const isValid = PermissionUtils.isValidFormat('user:read');
     * const isInvalid = PermissionUtils.isValidFormat('');
     * ```
     */
    isValidFormat: (permission: string) => boolean;
};

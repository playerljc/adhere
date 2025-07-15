import React from 'react';
import type { FC } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import type {
  PermissionFunction,
  PermissionProps,
  PermissionCheckResult,
  PermissionSetter,
  PermissionGetter,
  PermissionChecker,
} from './types';

/**
 * 全局权限存储
 * @private
 */
let permissions: string[] = [];

/**
 * 设置拥有的所有权限
 * @description 用于初始化或更新全局权限列表
 * @param {string[]} permission - 权限列表
 * @example
 * ```typescript
 * setPermission(['read', 'write', 'delete']);
 * ```
 */
export const setPermission: PermissionSetter = (permission: string[]): void => {
  if (!Array.isArray(permission)) {
    console.warn('setPermission: permission参数必须是数组类型');
    return;
  }
  permissions = [...permission];
};

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
export const getPermission: PermissionGetter = (): string[] => {
  return JSON.parse(JSON.stringify(permissions));
};

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
export const checkPermission: PermissionChecker = (
  allPermission: string[] = getPermission(),
  currentPermissions?: string[] | string
): PermissionCheckResult => {
  // 如果没有指定权限列表，使用全局权限
  allPermission = allPermission || getPermission();

  // 如果没有权限要求，默认允许访问
  if (!currentPermissions) {
    return true;
  }

  // 如果没有可用权限列表或权限列表不是数组，默认允许访问
  if (!allPermission || !Array.isArray(allPermission)) {
    return true;
  }

  // 检查权限数组（需要全部满足）
  if (Array.isArray(currentPermissions)) {
    return currentPermissions.every(
      (permission) => allPermission.includes(permission)
    );
  }

  // 检查单个权限
  return allPermission.includes(currentPermissions);
};

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
export const Permission: FC<PermissionProps> = ({
  allPermission = getPermission(),
  permissions,
  children,
  noMatch = () => null,
}) => {
  const hasPermission = checkPermission(allPermission, permissions);
  
  return (
    <ConditionalRender 
      conditional={hasPermission} 
      noMatch={noMatch}
    >
      {children}
    </ConditionalRender>
  );
};

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
export function PermissionFun({
  allPermission = getPermission(),
  permissions,
  match,
  noMatch,
}: PermissionFunction): React.ReactNode {
  const hasPermission = checkPermission(allPermission, permissions);
  
  return ConditionalRender.conditionalRender({
    conditional: hasPermission,
    match,
    noMatch,
  });
}

// 设置默认属性（已通过TypeScript接口处理）
// Permission.defaultProps = {
//   allPermission: undefined,
//   permissions: '',
//   noMatch: () => null,
//   children: null,
// };

// PropTypes验证（已通过TypeScript类型系统处理）
// Permission.propTypes = {
//   allPermission: PropTypes.array,
//   permissions: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
//   noMatch: PropTypes.node,
//   children: PropTypes.node,
// };

/**
 * 权限工具函数集合
 */
export const PermissionUtils = {
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
  hasAnyPermission: (
    allPermission: string[] = getPermission(),
    permissions: string[]
  ): boolean => {
    if (!Array.isArray(permissions) || permissions.length === 0) {
      return true;
    }
    
    allPermission = allPermission || getPermission();
    
    if (!allPermission || !Array.isArray(allPermission)) {
      return true;
    }
    
    return permissions.some(permission => allPermission.includes(permission));
  },

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
  hasAllPermissions: (
    allPermission: string[] = getPermission(),
    permissions: string[]
  ): boolean => {
    return checkPermission(allPermission, permissions);
  },

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
  getPermissionIntersection: (
    allPermission: string[] = getPermission(),
    permissions: string[]
  ): string[] => {
    allPermission = allPermission || getPermission();
    
    if (!Array.isArray(allPermission) || !Array.isArray(permissions)) {
      return [];
    }
    
    return allPermission.filter(permission => permissions.includes(permission));
  },

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
  isEmpty: (permissions: string[]): boolean => {
    return !Array.isArray(permissions) || permissions.length === 0;
  },

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
  isValidFormat: (permission: string): boolean => {
    return typeof permission === 'string' && permission.trim().length > 0;
  },
};

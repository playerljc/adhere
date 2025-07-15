import React from 'react';
/**
 * 权限配置接口
 * @interface PermissionProps
 */
export interface PermissionProps {
    /** 所有可用权限列表 */
    allPermission?: string[];
    /** 当前组件或模块需要的权限，可以是单个权限或权限数组 */
    permissions: string[] | string;
    /** 有权限时渲染的内容 */
    children: React.ReactNode;
    /** 无权限时渲染的内容 */
    noMatch?: () => React.ReactElement | null;
}
/**
 * 权限函数配置接口
 * @interface PermissionFunction
 */
export interface PermissionFunction {
    /** 所有可用权限列表 */
    allPermission?: string[];
    /** 当前组件或模块需要的权限，可以是单个权限或权限数组 */
    permissions: string[] | string;
    /** 有权限时返回的值 */
    match: React.ReactNode;
    /** 无权限时返回的值 */
    noMatch?: React.ReactNode;
}
/**
 * 权限检查结果类型
 */
export type PermissionCheckResult = boolean;
/**
 * 权限设置函数类型
 */
export type PermissionSetter = (permissions: string[]) => void;
/**
 * 权限获取函数类型
 */
export type PermissionGetter = () => string[];
/**
 * 权限检查函数类型
 */
export type PermissionChecker = (allPermission?: string[], currentPermissions?: string[] | string) => PermissionCheckResult;

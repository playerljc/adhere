import React from 'react';
/**
 * 过滤组件属性，移除 children 属性
 * @param props - 原始属性对象
 * @returns 过滤后的属性对象
 */
export declare const filterProps: <T extends {
    children?: React.ReactNode;
}>(props: T | undefined) => Partial<Omit<T, "children">>;
/**
 * 计算 TRBLC 布局容器的类名
 * @param selectorPrefix - 选择器前缀
 * @param cProps - 中心区域属性
 * @param wrapClassName - 包装类名
 * @returns 计算后的类名
 */
export declare const getTRBLCClassList: (selectorPrefix: string, cProps?: {
    autoFixed?: boolean;
}, wrapClassName?: string) => string;
/**
 * 计算自动包装容器的类名
 * @param selectorPrefix - 选择器前缀
 * @param autoWrapProps - 自动包装属性
 * @returns 计算后的类名
 */
export declare const getAutoWrapClassList: (selectorPrefix: string, autoWrapProps?: {
    autoFixed?: boolean;
    className?: string;
}) => string;
/**
 * 计算自动内部容器的类名
 * @param selectorPrefix - 选择器前缀
 * @param autoInnerProps - 自动内部属性
 * @param additionalClasses - 额外的类名
 * @returns 计算后的类名
 */
export declare const getAutoInnerClassList: (selectorPrefix: string, autoInnerProps?: {
    autoFixed?: boolean;
    className?: string;
}, additionalClasses?: string) => string;

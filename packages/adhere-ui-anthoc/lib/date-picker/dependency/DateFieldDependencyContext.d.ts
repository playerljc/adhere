import React from 'react';
import type { DateFieldDependencyContextValue, DateFieldDependencyProviderProps } from '../types';
/**
 * useDateFieldDependency
 * @description 读取 DateFieldDependencyProvider 提供的 register/getFieldValue 等能力
 */
export declare function useDateFieldDependency(): DateFieldDependencyContextValue | null;
/**
 * DateFieldDependencyProvider
 * @description 为同组 DatePicker 提供 fieldKey 注册表与统一的 getFieldValue
 *
 * 使用方式：
 * 1. Form 场景：传入 form，fieldKey 与 Form.Item name 保持一致
 * 2. 非 Form 场景：不传 form，依赖各 DatePicker 的 register/onChange 写入 registry
 * 3. 多实例：同一 Provider 下使用不同 fieldKey 前缀隔离各组日期（如 contractStartDate / projectStartDate）
 */
export declare function DateFieldDependencyProvider({ children, form, getFieldValue: externalGetFieldValue, }: DateFieldDependencyProviderProps): React.JSX.Element;
export type { DateFieldDependencyProviderProps };

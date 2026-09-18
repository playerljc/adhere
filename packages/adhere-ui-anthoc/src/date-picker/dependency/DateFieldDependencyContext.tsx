import { Form } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { createContext, useCallback, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import type { DateFieldDependencyContextValue, DateFieldDependencyProviderProps } from '../types';
import { resolveDateFieldValue } from './resolveDateFieldValue';
import { useDateFieldRegistry } from './useDateFieldRegistry';

const DateFieldDependencyContext = createContext<DateFieldDependencyContextValue | null>(null);

/**
 * useDateFieldDependency
 * @description 读取 DateFieldDependencyProvider 提供的 register/getFieldValue 等能力
 */
export function useDateFieldDependency() {
  return useContext(DateFieldDependencyContext);
}

/**
 * FormValuesSubscriber
 * @description 监听 form 全量字段变化，驱动 Provider 重渲染
 *
 * dependencies 制约依赖 getFieldValue 读取最新值；Form 本身不会自动触发
 * Context 消费方更新，因此通过 Form.useWatch([], form) 订阅任意字段变更。
 */
function FormValuesSubscriber({ form, children }: { form: FormInstance; children: ReactNode }) {
  Form.useWatch([], form);
  return children;
}

/**
 * DateFieldDependencyProvider
 * @description 为同组 DatePicker 提供 fieldKey 注册表与统一的 getFieldValue
 *
 * 使用方式：
 * 1. Form 场景：传入 form，fieldKey 与 Form.Item name 保持一致
 * 2. 非 Form 场景：不传 form，依赖各 DatePicker 的 register/onChange 写入 registry
 * 3. 多实例：同一 Provider 下使用不同 fieldKey 前缀隔离各组日期（如 contractStartDate / projectStartDate）
 */
export function DateFieldDependencyProvider({
  children,
  form,
  getFieldValue: externalGetFieldValue,
}: DateFieldDependencyProviderProps) {
  const { register, unregister, registryRef, version } = useDateFieldRegistry();

  const getFieldValue = useCallback(
    (fieldKey: string) =>
      resolveDateFieldValue({
        fieldKey,
        registry: registryRef.current,
        form,
        externalGetFieldValue,
      }),
    [externalGetFieldValue, form, version],
  );

  const contextValue = useMemo<DateFieldDependencyContextValue>(
    () => ({
      register,
      unregister,
      getFieldValue,
      version,
    }),
    [register, unregister, getFieldValue, version],
  );

  const provider = (
    <DateFieldDependencyContext.Provider value={contextValue}>
      {children}
    </DateFieldDependencyContext.Provider>
  );

  if (form) {
    return <FormValuesSubscriber form={form}>{provider}</FormValuesSubscriber>;
  }

  return provider;
}

export type { DateFieldDependencyProviderProps };

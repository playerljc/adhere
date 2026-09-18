import { Form } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { createContext, useCallback, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import type { DateFieldDependencyContextValue, DateFieldDependencyProviderProps } from '../types';
import { resolveDateFieldValue } from './resolveDateFieldValue';
import { useDateFieldRegistry } from './useDateFieldRegistry';

const DateFieldDependencyContext = createContext<DateFieldDependencyContextValue | null>(null);

export function useDateFieldDependency() {
  return useContext(DateFieldDependencyContext);
}

function FormValuesSubscriber({ form, children }: { form: FormInstance; children: ReactNode }) {
  Form.useWatch([], form);
  return children;
}

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

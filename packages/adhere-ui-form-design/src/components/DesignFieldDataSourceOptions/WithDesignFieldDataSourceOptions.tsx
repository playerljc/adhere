import React, { type ReactNode } from 'react';

import type { FieldProps } from '../../types';
import type { DesignFieldDataSourceOption } from '../../utils/dataSourceOptions';
import { useDesignFieldDataSourceOptions } from '../../utils/useDesignFieldDataSourceOptions';
import type { DataSourceManagerFormItemValue } from '../DataSourceManagerFormItem';

export type WithDesignFieldDataSourceOptionsRenderArgs = {
  source: DataSourceManagerFormItemValue | undefined;
  options: DesignFieldDataSourceOption[];
  loading: boolean;
  restFieldProps: FieldProps;
};

export type WithDesignFieldDataSourceOptionsProps = {
  fieldProps: FieldProps;
  /** fieldProps 上存放 DataSourceManager 值的 key，默认 selectOptions */
  designOptionsKey?: string;
  children: (args: WithDesignFieldDataSourceOptionsRenderArgs) => ReactNode;
};

/**
 * 将「数据源 → options」的设计器公共逻辑通过 render props 注入子渲染
 * 适用于 Select、Radio.Group 等依赖 options 的预览控件
 */
export function WithDesignFieldDataSourceOptions({
  fieldProps,
  designOptionsKey = 'selectOptions',
  children,
}: WithDesignFieldDataSourceOptionsProps) {
  const { source, options, loading, restFieldProps } = useDesignFieldDataSourceOptions(
    fieldProps,
    designOptionsKey,
  );

  return <>{children({ source, options, loading, restFieldProps })}</>;
}

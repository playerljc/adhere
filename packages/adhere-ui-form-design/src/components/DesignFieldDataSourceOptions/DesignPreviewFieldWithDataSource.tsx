import React, { type CSSProperties, type ReactNode } from 'react';

import type { DataSourceManagerFormItemValue } from '../DataSourceManagerFormItem';
import type { FieldProps, FormItemProps } from '../../types';
import type { DesignFieldDataSourceOption } from '../../utils/dataSourceOptions';
import { WithDesignFieldDataSourceOptions } from './WithDesignFieldDataSourceOptions';

export type DesignPreviewFieldWithDataSourceRenderArgs = {
  source: DataSourceManagerFormItemValue | undefined;
  options: DesignFieldDataSourceOption[];
  loading: boolean;
  restFieldProps: FieldProps;
  style: CSSProperties;
  actions: Record<string, (...args: any[]) => any>;
  /** 设计态表单项上的预览值，由具体控件解释类型 */
  previewValue: unknown;
};

export type DesignPreviewFieldWithDataSourceProps = {
  fieldProps: FieldProps;
  formItemProps?: FormItemProps;
  style?: CSSProperties;
  actions?: Record<string, (...args: any[]) => any>;
  designOptionsKey?: string;
  children: (args: DesignPreviewFieldWithDataSourceRenderArgs) => ReactNode;
};

/**
 * 设计器预览：解析数据源得到 options / loading，再由 children 渲染任意依赖 options 的控件（Select、Radio.Group 等）
 */
export function DesignPreviewFieldWithDataSource({
  fieldProps,
  formItemProps,
  style,
  actions,
  designOptionsKey = 'selectOptions',
  children,
}: DesignPreviewFieldWithDataSourceProps) {
  const previewValue = (formItemProps as { value?: unknown } | undefined)?.value;

  return (
    <WithDesignFieldDataSourceOptions fieldProps={fieldProps} designOptionsKey={designOptionsKey}>
      {({ source, options, loading, restFieldProps }) =>
        children({
          source,
          options,
          loading,
          restFieldProps,
          style: style ?? {},
          actions: actions ?? {},
          previewValue,
        })
      }
    </WithDesignFieldDataSourceOptions>
  );
}

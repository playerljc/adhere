import React, { type CSSProperties, type ReactNode } from 'react';
import type { FieldProps, FormItemProps } from '../../types';
import type { DesignFieldDataSourceOption } from '../../utils/dataSourceOptions';
import type { DataSourceManagerFormItemValue } from '../DataSourceManagerFormItem';
export type DesignPreviewFieldWithDataSourceRenderArgs = {
    source: DataSourceManagerFormItemValue | undefined;
    options: DesignFieldDataSourceOption[];
    loading: boolean;
    restFieldProps: FieldProps;
    style: CSSProperties;
    actions: Record<string, (...args: any[]) => any>;
    /** 设计态表单项上的预览值，由具体控件解释类型 */
    previewValue: unknown;
    /** Form.Item 注入的受控值 */
    value?: unknown;
    onChange?: (...args: any[]) => void;
};
export type DesignPreviewFieldWithDataSourceProps = {
    fieldProps: FieldProps;
    formItemProps?: FormItemProps;
    style?: CSSProperties;
    actions?: Record<string, (...args: any[]) => any>;
    designOptionsKey?: string;
    /** Form.Item 注入的受控值，需透传给内部表单控件 */
    value?: unknown;
    onChange?: (...args: any[]) => void;
    children: (args: DesignPreviewFieldWithDataSourceRenderArgs) => ReactNode;
};
/**
 * 设计器预览：解析数据源得到 options / loading，再由 children 渲染任意依赖 options 的控件（Select、Radio.Group 等）
 */
export declare function DesignPreviewFieldWithDataSource({ fieldProps, formItemProps, style, actions, designOptionsKey, value, onChange, children, }: DesignPreviewFieldWithDataSourceProps): React.JSX.Element;

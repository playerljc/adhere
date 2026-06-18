import React from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignValueProps, FormItemProps } from '../types';
export type FormPropertyShellProps = {
    formName: string;
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
    rows: DataItemRow[];
    /**
     * 将 formItemProps 映射为表单字段初始值（例如 Slider 将 value 数组归一为单项）
     */
    mapFormValuesFromFormItemProps?: (formItemProps: FormItemProps) => Record<string, unknown>;
};
/**
 * Slider 等：表单「表单项配置」里 value 可能为区间数组，设计器表单中按单值展示
 */
export declare function mapSliderFormPropertyFormValues(formItemProps: FormItemProps): Record<string, unknown>;
/**
 * 表单项属性面板公共容器：Form 同步、回写 DesignContext
 */
export declare function FormPropertyShell({ formName, designValue, renderFormItems, rows, mapFormValuesFromFormItemProps, }: FormPropertyShellProps): React.JSX.Element;

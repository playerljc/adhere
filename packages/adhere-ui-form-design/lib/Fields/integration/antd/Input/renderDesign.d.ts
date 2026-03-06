import React, { type CSSProperties, type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignValue, FieldProps, FormItemProps } from '../../../../types';
export declare function LabelDesign({ formItemProps }: {
    formItemProps?: FormItemProps;
}): React.JSX.Element;
export declare function ValueDesign({ value: { id, props: { formItemProps, fieldProps, styleProps, actionsProps }, }, children, }: {
    value: DesignValue;
    children: (params: {
        fieldProps: FieldProps;
        style: CSSProperties;
        actions: Record<string, (...args: any[]) => any>;
    }) => ReactNode;
}): React.JSX.Element;
/**
 * renderDesign
 * @param props
 */
export declare function renderDesign({ value }: {
    value: DesignValue;
}): DataItemRow;

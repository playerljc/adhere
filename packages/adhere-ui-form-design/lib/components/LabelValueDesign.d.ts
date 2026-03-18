import React, { type CSSProperties, type ReactNode } from 'react';
import type { DesignValue, FieldProps, FormItemProps, StyleProps } from '../types';
export declare function LabelDesign({ formItemProps, styleProps, }: {
    formItemProps?: FormItemProps;
    styleProps?: StyleProps;
}): React.JSX.Element;
export declare function ValueDesign({ value: { id, props: { formItemProps, fieldProps, styleProps, actionsProps }, }, children, }: {
    value: DesignValue;
    children: (params: {
        fieldProps: FieldProps;
        style: CSSProperties;
        actions: Record<string, (...args: any[]) => any>;
    }) => ReactNode;
}): React.JSX.Element;

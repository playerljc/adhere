import { SelectProps } from 'antd';
import { ReactNode } from 'react';
import { ComponentProps } from './CommonTypes';
/**
 * WidgetPropertyFieldType
 */
export declare const WidgetPropertyFieldType: {
    INPUT: string;
    INPUT_NUMBER: string;
    REQUIRED: string;
    SWITCH: string;
    SELECT: string;
    DATA_SOURCE: string;
    INPUT_VALIDATION_TYPE: string;
};
export declare const InputWidgetPropertyFieldType: string[];
export type Type = keyof typeof WidgetPropertyFieldType | string;
/**
 * DWidgetPropertyField
 * @description 数据
 */
export interface DWidgetPropertyField<P> {
    key?: string;
    name?: string;
    required?: boolean;
    type: Type;
    props: P;
}
/**
 * IWidgetPropertyField
 */
export interface IWidgetPropertyField<P> {
    readonly key: string;
    readonly name: string;
    readonly required: boolean;
    readonly type: Type;
    readonly props: P;
    render(children: ReactNode): ReactNode;
    render(): ReactNode;
    getType(): Type;
    getProps(): P;
    getKey(): string;
    getName(): string;
    getRequired(): boolean;
}
/**
 * WidgetPropertyFieldProps
 */
export interface WidgetPropertyFieldProps<P, T> extends ComponentProps {
    key: string;
    name: string;
    required: boolean;
    type: Type;
    props: P;
    value: T;
    onChange: (value: any) => any;
}
/**
 * SelectWidgetPropertyFieldProps
 */
export interface SelectWidgetPropertyFieldProps extends SelectProps {
    dataSource: Array<{
        label: string;
        value: string;
    }>;
}
/**
 * InputValidationTypeWidgetPropertyFieldProps
 */
export interface InputValidationTypeWidgetPropertyFieldProps {
    value: {
        checked: boolean;
        type: string;
        validationMessage: string;
    };
    dataSource: Array<{
        label: string;
        value: string;
    }>;
}
/**
 * RequiredWidgetPropertyFieldProps
 */
export interface RequiredWidgetPropertyFieldProps {
    value: {
        required: boolean;
        validationMessage: string;
    };
}

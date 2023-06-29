/*WidgetPropertyField的类型*/
import { SelectProps } from 'antd';
import { ReactNode } from 'react';

import { ComponentProps } from './CommonTypes';

/**
 * WidgetPropertyFieldType
 */
export const WidgetPropertyFieldType = {
  INPUT: 'INPUT',
  INPUT_NUMBER: 'INPUT_NUMBER',
  REQUIRED: 'REQUIRED',
  SWITCH: 'SWITCH',
  SELECT: 'SELECT',
  DATA_SOURCE: 'DATA_SOURCE',
  INPUT_VALIDATION_TYPE: 'INPUT_VALIDATION_TYPE',
};

export const InputWidgetPropertyFieldType = [
  // 'button',
  // 'checkbox',
  // 'color',
  // 'date',
  // 'datetime-local',
  // 'email',
  // 'file',
  'hidden',
  // 'image',
  // 'month',
  'number',
  'password',
  // 'radio',
  // 'range',
  // 'reset',
  'search',
  // 'submit',
  // 'tel',
  'text',
  // 'time',
  // 'url',
  // 'week',
];

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
  value?: T;
  onChange?: (value: T) => void;
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

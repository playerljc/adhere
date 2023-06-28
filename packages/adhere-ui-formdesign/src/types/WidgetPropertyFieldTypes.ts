/*WidgetPropertyField的类型*/
import { ReactNode } from 'react';

import { ComponentProps } from './CommonTypes';

/**
 * WidgetPropertyFieldType
 */
export const WidgetPropertyFieldType = {
  INPUT: 'INPUT',
  INPUT_NUMBER: 'INPUT_NUMBER',
  SWITCH: 'SWITCH',
  SELECT: 'SELECT',
  REQUIRED: 'REQUIRED',
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
export interface DWidgetPropertyField {
  key?: string;
  name?: string;
  required?: boolean;
  type: Type;
  props: { [key: string]: any };
}

/**
 * IWidgetPropertyField
 */
export interface IWidgetPropertyField {
  readonly key: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: Type;
  readonly props: { [key: string]: any };
  render(children: ReactNode): ReactNode;
  render(): ReactNode;
  getType(): Type;
  getProps(): { [key: string]: any };
  getKey(): string;
  getName(): string;
  getRequired(): boolean;
}

/**
 * WidgetPropertyFieldProps
 */
export interface WidgetPropertyFieldProps extends ComponentProps {
  key: string;
  name: string;
  required: boolean;
  type: Type;
  props: { [key: string]: any };
}

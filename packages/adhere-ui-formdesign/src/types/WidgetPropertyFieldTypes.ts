/*WidgetPropertyField的类型*/
import { ReactNode } from 'react';

/**
 * WidgetPropertyFieldType
 */
export const WidgetPropertyFieldType = {
  INPUT: 'INPUT',
  SWITCH: 'SWITCH',
  REQUIRED: 'REQUIRED',
};

export type Type = keyof typeof WidgetPropertyFieldType | string;

/**
 * DWidgetPropertyField
 * @description 数据
 */
export interface DWidgetPropertyField {
  type: Type;
  props: { [key: string]: any };
}

/**
 *
 */
export interface IWidgetPropertyField {
  readonly type: Type;
  readonly props: { [key: string]: any };
  render(): ReactNode;
  getType(): Type;
  getProps(): { [key: string]: any };
}

/*WidgetPropertyField的类型*/
import { ReactNode } from 'react';

export enum Type {
  INPUT = 'INPUT',
}

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

import WidgetPropertyField from '../WidgetProperty/Field/WidgetPropertyField';
import { DWidgetPropertyField } from './WidgetPropertyFieldTypes';

/**
 * DWidgetProperty
 * @description 数据
 */
export interface DWidgetProperty {
  key: string;
  name: string;
  value: DWidgetPropertyField<any>;
  required: boolean;
}

export interface IWidgetProperty {
  readonly key: string;
  readonly name: string;
  readonly value: WidgetPropertyField;
  readonly required: boolean;
  getKey(): string;
  getName(): string;
  getValue(): WidgetPropertyField;
  getRequired(): boolean;
}

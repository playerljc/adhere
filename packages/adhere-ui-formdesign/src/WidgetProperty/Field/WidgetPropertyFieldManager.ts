import { Type } from '../../types/WidgetPropertyFieldTypes';
import InputPropertyField from './Input';
import WidgetPropertyField from './WidgetPropertyField';

// 存储所有的WidgetPropertyFields
const widgetPropertyFields: Map<Type, typeof WidgetPropertyField> = new Map<
  Type,
  typeof WidgetPropertyField
>();

registerField(Type.INPUT, InputPropertyField);

export function registerField<T extends typeof WidgetPropertyField>(
  type: Type,
  widgetPropertyFieldClass: T,
) {
  widgetPropertyFields.set(type, widgetPropertyFieldClass);
}

export function getFieldClassByType(type: Type) {
  return widgetPropertyFields.get(type);
}

export function getAllFieldClass() {
  return [...Array.from(widgetPropertyFields.values())];
}

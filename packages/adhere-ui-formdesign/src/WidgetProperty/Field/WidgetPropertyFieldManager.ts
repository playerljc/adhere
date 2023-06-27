import { Type, WidgetPropertyFieldType } from '../../types/WidgetPropertyFieldTypes';
import InputPropertyField from './Input';
import RequiredField from './Required';
import SwitchPropertyField from './Switch';
import WidgetPropertyField from './WidgetPropertyField';

// 存储所有的WidgetPropertyFields
const widgetPropertyFields: Map<Type, typeof WidgetPropertyField> = new Map<
  Type,
  typeof WidgetPropertyField
>();

registerField(WidgetPropertyFieldType.INPUT, InputPropertyField);
registerField(WidgetPropertyFieldType.SWITCH, SwitchPropertyField);
registerField(WidgetPropertyFieldType.REQUIRED, RequiredField);

/**
 * registerField
 * @param {Type} type
 * @param {WidgetPropertyField} widgetPropertyFieldClass
 */
export function registerField<T extends typeof WidgetPropertyField>(
  type: Type,
  widgetPropertyFieldClass: T,
) {
  widgetPropertyFields.set(type, widgetPropertyFieldClass);
  WidgetPropertyFieldType[type] = type;
}

export function getFieldClassByType(type: Type) {
  return widgetPropertyFields.get(type);
}

export function getAllFieldClass() {
  return [...Array.from(widgetPropertyFields.values())];
}

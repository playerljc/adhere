import { Type, WidgetPropertyFieldType } from '../../types/WidgetPropertyFieldTypes';
import InputPropertyField from './Input';
import InputNumberPropertyField from './InputNumber';
import SelectPropertyField from './Select';
import SwitchPropertyField from './Switch';
import WidgetPropertyField from './WidgetPropertyField';

// 存储所有的WidgetPropertyFields
const widgetPropertyFields: Map<Type, typeof WidgetPropertyField> = new Map<
  Type,
  typeof WidgetPropertyField
>();

registerField(WidgetPropertyFieldType.INPUT, InputPropertyField);
registerField(WidgetPropertyFieldType.INPUT_NUMBER, InputNumberPropertyField);
registerField(WidgetPropertyFieldType.SWITCH, SwitchPropertyField);
registerField(WidgetPropertyFieldType.SELECT, SelectPropertyField);
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

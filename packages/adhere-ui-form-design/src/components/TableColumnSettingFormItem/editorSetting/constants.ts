import type { TableColumnEditorType } from '../TableColumnSettingFormItem';

export const InputNumberEditorTypes = new Set<TableColumnEditorType>([
  'inputNumber',
  'inputNumberDecimal1',
  'inputNegativeNumberDecimal1',
  'inputPositiveNumberDecimal1',
  'inputNumberDecimal1French',
  'inputNumberDecimal1German',
  'inputNumberDecimal1International',
  'inputNumberDecimal1US',
  'inputNumberDecimal2',
  'inputNegativeNumberDecimal2',
  'inputPositiveNumberDecimal2',
  'inputNumberDecimal2French',
  'inputNumberDecimal2German',
  'inputNumberDecimal2International',
  'inputNumberDecimal2US',
  'inputNumberInteger',
  'inputNegativeNumberInteger',
  'inputPositiveNumberInteger',
  'inputNumberIntegerFrench',
  'inputNumberIntegerGerman',
  'inputNumberIntegerInternational',
  'inputNumberIntegerUS',
]);

export const DatePickerEditorTypes = new Set<TableColumnEditorType>([
  'datePicker',
  'birthdayPicker',
  'boundedTimePicker',
]);

import type { TableColumnEditorType } from '../TableColumnSettingFormItem';

export type EditorSettingValue = Record<string, any>;

export interface EditorSettingModalProps {
  open: boolean;
  editorType: TableColumnEditorType | undefined;
  value: EditorSettingValue | undefined;
  onCancel: () => void;
  onOk: (next: EditorSettingValue) => void;
}

export interface DatePickerRuntimeState {
  pickerValue?: string;
  dateBoundMode?: string;
}

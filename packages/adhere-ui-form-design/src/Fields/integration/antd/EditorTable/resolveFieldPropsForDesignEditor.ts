import type { TableColumnSettingItem } from '../../../../components/TableColumnSettingFormItem';
import type { DesignValueProps, FieldProps, Terminal } from '../../../../types';
import { mergeMobilePreviewFieldProps } from '../../../../utils';
import { EDITOR_TABLE_MOBILE_COLUMN_MIN_WIDTH } from './constant';

function mobileSuggestion(base: FieldProps): Partial<FieldProps> {
  const patch: Partial<FieldProps> = {
    // 移动端隐藏序号列（isShowNumber 读取 fieldProps.no）
    no: false,
  };

  const columnSetting = base.columnSetting as TableColumnSettingItem[] | undefined;
  if (Array.isArray(columnSetting) && columnSetting.length > 0) {
    patch.columnSetting = columnSetting.map((column) => ({
      ...column,
      widthMode: 'number',
      widthValue: EDITOR_TABLE_MOBILE_COLUMN_MIN_WIDTH,
    }));
  }

  return patch;
}

/** EditorTable：移动端预览 fieldProps（建议 + 用户 mobile 覆盖） */
export function resolveFieldPropsForDesignEditor(
  props: DesignValueProps,
  terminal: Terminal,
): FieldProps {
  return mergeMobilePreviewFieldProps(props, terminal, mobileSuggestion(props.fieldProps));
}

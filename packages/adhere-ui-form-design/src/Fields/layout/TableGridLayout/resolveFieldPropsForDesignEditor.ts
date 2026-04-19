import type { DesignValueProps, FieldProps, Terminal } from '../../../types';
import { mergeMobilePreviewFieldProps } from '../../../utils';

function mobileSuggestion(base: FieldProps): Partial<FieldProps> {
  const patch: Partial<FieldProps> = {};
  const row0 = base?.data?.[0] as Record<string, unknown> | undefined;
  if (row0 && typeof row0.columnCount === 'number' && row0.columnCount > 1) {
    patch.data = [{ ...row0, columnCount: 1, colgroup: ['auto'] }];
  }
  if (base.layout === 'horizontal') {
    patch.layout = 'vertical';
  }
  return patch;
}

/** TableGridLayout：移动端预览 fieldProps（建议 + 用户 mobile 覆盖） */
export function resolveFieldPropsForDesignEditor(
  props: DesignValueProps,
  terminal: Terminal,
): FieldProps {
  return mergeMobilePreviewFieldProps(props, terminal, mobileSuggestion(props.fieldProps));
}

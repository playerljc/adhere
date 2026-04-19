import type { DesignValueProps, FieldProps, Terminal } from '../../../types';
import { mergeMobilePreviewFieldProps } from '../../../utils';

/** CardLayout：仅合并用户 mobile 覆盖 */
export function resolveFieldPropsForDesignEditor(
  props: DesignValueProps,
  terminal: Terminal,
): FieldProps {
  return mergeMobilePreviewFieldProps(props, terminal, {});
}

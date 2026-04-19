import type { DesignValueProps, FieldProps, Terminal } from '../../../types';
import { mergeMobilePreviewFieldProps } from '../../../utils';

function mobileSuggestion(base: FieldProps): Partial<FieldProps> {
  const placement = base.tabPlacement as string | undefined;
  if (placement === 'left' || placement === 'right') {
    return { tabPlacement: 'top' };
  }
  return {};
}

/** TabsLayout：移动端预览 fieldProps */
export function resolveFieldPropsForDesignEditor(
  props: DesignValueProps,
  terminal: Terminal,
): FieldProps {
  return mergeMobilePreviewFieldProps(props, terminal, mobileSuggestion(props.fieldProps));
}

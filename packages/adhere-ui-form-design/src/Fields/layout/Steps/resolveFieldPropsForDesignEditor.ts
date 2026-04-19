import type { DesignValueProps, FieldProps, Terminal } from '../../../types';
import { mergeMobilePreviewFieldProps } from '../../../utils';

function mobileSuggestion(base: FieldProps): Partial<FieldProps> {
  const titlePlacement = (base.titlePlacement ?? base.labelPlacement ?? 'horizontal') as string;
  if (titlePlacement === 'horizontal') {
    return { titlePlacement: 'vertical' };
  }
  return {};
}

/** StepsLayout：移动端预览 fieldProps */
export function resolveFieldPropsForDesignEditor(
  props: DesignValueProps,
  terminal: Terminal,
): FieldProps {
  return mergeMobilePreviewFieldProps(props, terminal, mobileSuggestion(props.fieldProps));
}

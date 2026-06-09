import type { DesignValue, DesignValueProps, FieldProps, Terminal } from '../../../types';
import { isDesktop, mergeMobilePreviewFieldProps } from '../../../utils';

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

/**
 * 移动端预览：TableGridLayout 子项 colSpan >= 2 不参与布局（与 columnCount 收窄为 1 一致）
 */
export function resolveTableGridChildForMobileParse(
  child: DesignValue,
  terminal: Terminal,
): DesignValue {
  if (isDesktop(terminal)) {
    return child;
  }

  const colSpan = child.props?.formItemProps?.colSpan;
  if (colSpan == null || colSpan < 2) {
    return child;
  }

  const { colSpan: _removed, ...restFormItemProps } = child.props.formItemProps ?? {};

  return {
    ...child,
    props: {
      ...child.props,
      formItemProps: restFormItemProps,
    },
  };
}

import type { DesignValue, FormItemProps } from '../types';

export type LabelValueColSpan = {
  labelColSpan: number;
  valueColSpan: number;
};

/**
 * 根据父节点与表单项配置计算 labelColSpan、valueColSpan
 */
export function computeLabelValueColSpan(
  parent: DesignValue | null | undefined,
  formItemProps?: FormItemProps,
): LabelValueColSpan {
  let labelColSpan = 1;
  let valueColSpan = 1;

  if (parent && formItemProps?.colSpan) {
    const fieldProps = parent.props.fieldProps;
    if (fieldProps.layout === 'vertical') {
      labelColSpan = formItemProps.colSpan;
      valueColSpan = formItemProps.colSpan;
    } else if (fieldProps.layout === 'horizontal') {
      valueColSpan = formItemProps.colSpan;
    }
  }

  return { labelColSpan, valueColSpan };
}

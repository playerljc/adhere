import type { DesignValue, FormItemProps } from '../types';
export type LabelValueColSpan = {
    labelColSpan: number;
    valueColSpan: number;
};
/**
 * 根据父节点与表单项配置计算 labelColSpan、valueColSpan
 */
export declare function computeLabelValueColSpan(parent: DesignValue | null | undefined, formItemProps?: FormItemProps): LabelValueColSpan;

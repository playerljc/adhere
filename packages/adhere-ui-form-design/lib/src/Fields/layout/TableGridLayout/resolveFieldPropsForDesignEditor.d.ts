import type { DesignValue, DesignValueProps, FieldProps, Terminal } from '../../../types';
/** TableGridLayout：移动端预览 fieldProps（建议 + 用户 mobile 覆盖） */
export declare function resolveFieldPropsForDesignEditor(props: DesignValueProps, terminal: Terminal): FieldProps;
/**
 * 移动端预览：TableGridLayout 子项 colSpan >= 2 不参与布局（与 columnCount 收窄为 1 一致）
 */
export declare function resolveTableGridChildForMobileParse(child: DesignValue, terminal: Terminal): DesignValue;

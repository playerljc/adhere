import type { DesignValueProps, FieldProps, Terminal } from '../types';
/**
 * 设计器移动端预览合并顺序：基线 fieldProps → 各布局自实现的 suggestion → 用户持久化 fieldPropsByTerminal.mobile（后者覆盖同键）。
 * 各布局在 renderDesign / renderMainProperty 中调用各自 resolveFieldPropsForDesignEditor，再传入本函数完成与 overlay 的合并。
 */
export declare function mergeMobilePreviewFieldProps(props: Pick<DesignValueProps, 'fieldProps' | 'fieldPropsByTerminal'>, terminal: Terminal, suggestion: Partial<FieldProps>): FieldProps;
/**
 * 将本次 patch 累加到某终端已有 overlay 上（与 lodash.merge 不同：标量数组整段替换，避免 colgroup 等按索引残留）。
 */
export declare function mergeFieldPropsTerminalOverlay(prevOverlay: Partial<FieldProps> | undefined, patch: Partial<FieldProps>): FieldProps;
/**
 * 计算写入 fieldPropsByTerminal.mobile 的差量：仅包含与基线不同的分支（含数组整段替换）。
 */
export declare function computeFieldPropsOverlayPatch(base: unknown, desired: unknown): Partial<FieldProps>;

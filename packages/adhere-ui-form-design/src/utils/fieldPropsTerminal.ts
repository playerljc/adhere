import merge from 'lodash.merge';

import type { DesignValueProps, FieldProps, Terminal } from '../types';

/**
 * 设计器移动端预览合并顺序：基线 fieldProps → 各布局自实现的 suggestion → 用户持久化 fieldPropsByTerminal.mobile（后者覆盖同键）。
 * 各布局在 renderDesign / renderMainProperty 中调用各自 resolveFieldPropsForDesignEditor，再传入本函数完成与 overlay 的合并。
 */
export function mergeMobilePreviewFieldProps(
  props: Pick<DesignValueProps, 'fieldProps' | 'fieldPropsByTerminal'>,
  terminal: Terminal,
  suggestion: Partial<FieldProps>,
): FieldProps {
  if (terminal === 'desktop') {
    return props.fieldProps;
  }
  const overlay = props.fieldPropsByTerminal?.mobile ?? {};
  return merge({}, props.fieldProps, suggestion, overlay) as FieldProps;
}

/**
 * 计算写入 fieldPropsByTerminal.mobile 的差量：仅包含与基线不同的分支（含数组整段替换）。
 */
export function computeFieldPropsOverlayPatch(base: unknown, desired: unknown): Partial<FieldProps> {
  const patch = computeDiffPatchRecursive(base, desired);
  return (patch ?? {}) as Partial<FieldProps>;
}

function computeDiffPatchRecursive(base: unknown, desired: unknown): unknown {
  if (desired === undefined) {
    return undefined;
  }
  if (typeof desired !== 'object' || desired === null) {
    return base === desired ? undefined : desired;
  }
  if (typeof base !== 'object' || base === null) {
    return desired;
  }
  if (Array.isArray(desired) || Array.isArray(base)) {
    if (jsonStableStringify(base) === jsonStableStringify(desired)) {
      return undefined;
    }
    return desired;
  }
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(desired as Record<string, unknown>)) {
    const sub = computeDiffPatchRecursive(
      (base as Record<string, unknown>)[key],
      (desired as Record<string, unknown>)[key],
    );
    if (sub !== undefined) {
      out[key] = sub;
    }
  }
  return Object.keys(out).length ? out : undefined;
}

function jsonStableStringify(v: unknown): string {
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

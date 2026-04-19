import merge from 'lodash.merge';

import type { DesignValue, DesignValueProps, FieldProps, Terminal } from '../types';

/**
 * 解析单节点：合并终端差量后的 fieldProps，供 parseDesign 传入各 renderDesign。
 * children 引用保持与 store 一致，由子级递归 parse 时再合并。
 */
export function withMergedFieldPropsForTerminal(
  value: DesignValue,
  terminal: Terminal,
): DesignValue {
  return {
    ...value,
    props: {
      ...value.props,
      fieldProps: mergeFieldPropsForTerminal(value.props, terminal),
    },
  };
}

/**
 * 将基线 fieldProps 与某终端上的差量合并，用于设计器渲染与属性面板展示。
 */
export function mergeFieldPropsForTerminal(
  props: Pick<DesignValueProps, 'fieldProps' | 'fieldPropsByTerminal'>,
  terminal: Terminal,
): FieldProps {
  if (terminal === 'desktop') {
    return props.fieldProps;
  }
  const overlay = props.fieldPropsByTerminal?.mobile;
  if (!overlay || typeof overlay !== 'object' || !Object.keys(overlay).length) {
    return props.fieldProps;
  }
  return merge({}, props.fieldProps, overlay) as FieldProps;
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

import type { DesignValueProps, FieldProps, Terminal } from '../types';

/** 仅用于预览合并的纯 JSON 结构克隆，避免写回共享引用 */
function deepClonePlainJson<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}

/** 首项为普通对象的数组：按索引合并元素；否则整段替换（避免 lodash.merge 把 colgroup 按索引拉长） */
function shouldMergeObjectArraysByIndex(existing: unknown, incoming: unknown[]): boolean {
  if (!Array.isArray(existing) || incoming.length === 0) return false;
  const a0 = existing[0];
  const b0 = incoming[0];
  return isPlainObject(a0) && isPlainObject(b0);
}

function mergeArrayByIndex(existing: unknown[], incoming: unknown[]): unknown[] {
  const len = Math.max(existing.length, incoming.length);
  const out: unknown[] = [];
  for (let i = 0; i < len; i += 1) {
    const oi = existing[i];
    const si = incoming[i];
    if (si === undefined) {
      out[i] = oi;
      continue;
    }
    if (oi === undefined || oi === null) {
      out[i] = si;
      continue;
    }
    if (isPlainObject(oi) && isPlainObject(si)) {
      out[i] = mergeFieldPropsLayersReplaceScalarArrays(oi, si);
      continue;
    }
    out[i] = si;
  }
  return out;
}

/**
 * 深合并：对象递归；对象数组按索引合并元素；其余数组（含 string[] 如 colgroup）以后者整段为准。
 * 用于 {@link mergeMobilePreviewFieldProps} 与终端 overlay 累加（见 mergeFieldPropsTerminalOverlay）。
 */
function mergeFieldPropsLayersReplaceScalarArrays(
  base: Record<string, unknown>,
  patch: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...base };
  for (const key of Object.keys(patch)) {
    const sv = patch[key];
    if (sv === undefined) continue;
    const ov = out[key];
    if (Array.isArray(sv)) {
      if (shouldMergeObjectArraysByIndex(ov, sv)) {
        out[key] = mergeArrayByIndex((Array.isArray(ov) ? ov : []) as unknown[], sv);
      } else {
        out[key] = sv.slice();
      }
      continue;
    }
    if (isPlainObject(sv)) {
      const inner = isPlainObject(ov) ? ov : {};
      out[key] = mergeFieldPropsLayersReplaceScalarArrays(inner, sv);
      continue;
    }
    out[key] = sv;
  }
  return out;
}

/**
 * 设计器移动端预览合并顺序：基线 fieldProps → 各布局自实现的 suggestion → 用户持久化 fieldPropsByTerminal.mobile（后者覆盖同键）。
 * 各布局在 renderDesign / renderMainProperty 中调用各自 resolveFieldPropsForDesignEditor，再传入本函数完成与 overlay 的合并。
 */
export function mergeMobilePreviewFieldProps(
  props: Pick<DesignValueProps, 'fieldProps' | 'fieldPropsByTerminal'>,
  terminal: Terminal,
  suggestion: Partial<FieldProps>,
): FieldProps {
  // 如果是桌面端，则直接返回 fieldProps
  if (terminal === 'desktop') {
    return props.fieldProps;
  }

  // mobile单独设置的
  const overlay = props.fieldPropsByTerminal?.mobile ?? {};
  const base = deepClonePlainJson(props.fieldProps) as unknown as Record<string, unknown>;
  let merged = mergeFieldPropsLayersReplaceScalarArrays(
    base,
    suggestion as unknown as Record<string, unknown>,
  );

  merged = mergeFieldPropsLayersReplaceScalarArrays(
    merged,
    overlay as unknown as Record<string, unknown>,
  );
  return merged as FieldProps;
}

/**
 * 将本次 patch 累加到某终端已有 overlay 上（与 lodash.merge 不同：标量数组整段替换，避免 colgroup 等按索引残留）。
 */
export function mergeFieldPropsTerminalOverlay(
  prevOverlay: Partial<FieldProps> | undefined,
  patch: Partial<FieldProps>,
): FieldProps {
  const base = deepClonePlainJson(prevOverlay ?? {}) as unknown as Record<string, unknown>;
  return mergeFieldPropsLayersReplaceScalarArrays(
    base,
    patch as unknown as Record<string, unknown>,
  ) as FieldProps;
}

/**
 * 计算写入 fieldPropsByTerminal.mobile 的差量：仅包含与基线不同的分支（含数组整段替换）。
 */
export function computeFieldPropsOverlayPatch(
  base: unknown,
  desired: unknown,
): Partial<FieldProps> {
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

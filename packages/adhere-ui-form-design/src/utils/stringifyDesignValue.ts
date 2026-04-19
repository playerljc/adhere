import type { DesignValue } from '../types';

/**
 * 将设计树序列化为格式化 JSON 字符串（函数省略、React 元素占位为 [ReactNode]）。
 */
export function stringifyDesignValue(value: DesignValue): string {
  try {
    return JSON.stringify(
      value,
      (_key, v) => {
        if (typeof v === 'function') return undefined;
        if (
          v &&
          typeof v === 'object' &&
          typeof (v as { $$typeof?: symbol }).$$typeof === 'symbol'
        ) {
          return '[ReactNode]';
        }
        return v;
      },
      2,
    );
  } catch {
    return '{}';
  }
}

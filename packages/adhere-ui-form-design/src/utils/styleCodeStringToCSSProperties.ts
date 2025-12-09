import type { CSSProperties } from 'react';

/**
 * styleCodeStringToCSSProperties
 * @description 将styleCodeString转换为CSSProperties
 * @param {string} styleCodeString
 * @return {CSSProperties}
 */
export function styleCodeStringToCSSProperties(styleCodeString: string): CSSProperties {
  if (!styleCodeString) return {};
  const cleaned = styleCodeString.replace(/\/\*[\s\S]*?\*\//g, '').trim();
  const l = cleaned.indexOf('{');
  const r = cleaned.lastIndexOf('}');
  let content = cleaned;
  if (l !== -1 && r !== -1 && l < r) {
    content = cleaned.slice(l + 1, r);
  }

  const toCamel = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/^-+/, '')
      .replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

  const style: CSSProperties = {};

  content
    .replace(/[\r\n]/g, ' ')
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .forEach((item) => {
      const idx = item.indexOf(':');
      if (idx === -1) return;
      const rawKey = item.slice(0, idx).trim();
      let rawValue = item.slice(idx + 1).trim();
      if (!rawKey || !rawValue) return;

      const key = /[A-Z]/.test(rawKey) ? rawKey : toCamel(rawKey);

      rawValue = rawValue.replace(/\s*!important\s*$/i, '');

      let value: string | number = rawValue;
      if (/^\d+(?:\.\d+)?px$/i.test(rawValue)) {
        value = Number(rawValue.replace(/px$/i, ''));
      } else if (/^\d+(?:\.\d+)?$/i.test(rawValue)) {
        value = Number(rawValue);
      }

      (style as any)[key] = value;
    });

  return style;
}

import { SELECT_VALUE_KEY_NAME } from '../../../../constant';
import type { I18nValue } from '../../../../types';
import { resolveI18nText } from '../../../../utils';

/** 解析富文本占位符（兼容 i18n 对象、纯字符串、未带 selectValue 的对象） */
export function resolveRichEditorPlaceholder(
  value: I18nValue | string | null | undefined,
  lang: string,
): string {
  const resolved = resolveI18nText(value, lang);
  if (typeof resolved === 'string' && resolved) {
    return resolved;
  }

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const record = value as Record<string, unknown>;
    const byLang = record[lang];
    if (typeof byLang === 'string' && byLang) {
      return byLang;
    }
    const selectKey = record[SELECT_VALUE_KEY_NAME];
    if (typeof selectKey === 'string') {
      const bySelect = record[selectKey];
      if (typeof bySelect === 'string' && bySelect) {
        return bySelect;
      }
    }
    for (const key of Object.keys(record)) {
      if (key === SELECT_VALUE_KEY_NAME) continue;
      const v = record[key];
      if (typeof v === 'string' && v) {
        return v;
      }
    }
  }

  if (typeof value === 'string') {
    return value;
  }

  return '';
}

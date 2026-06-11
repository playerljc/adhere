import React from 'react';

import { SELECT_VALUE_KEY_NAME } from '../constant';
import type { I18nValue } from '../types';

export function resolveI18nText(
  value: I18nValue | string | null | undefined,
  lang: string,
): string | React.ReactNode {
  if (value === undefined || value === null) return '';
  if (typeof value === 'string') return value;
  if (React.isValidElement(value)) return value;
  if (typeof value === 'object' && SELECT_VALUE_KEY_NAME in value) {
    const i18n = value as I18nValue;
    return String(i18n[lang] ?? i18n[i18n.selectValue] ?? '');
  }
  // 兼容历史数据：{ key: 'zh_CN', zh_CN: '...' }
  if (typeof value === 'object' && 'key' in value) {
    const legacy = value as Record<string, unknown>;
    const selectLang = typeof legacy.key === 'string' ? legacy.key : lang;
    return String(legacy[lang] ?? legacy[selectLang] ?? '');
  }
  return '';
}

export function isResolvedI18nTextEmpty(
  value: I18nValue | string | null | undefined,
  lang: string,
): boolean {
  const resolved = resolveI18nText(value, lang);
  if (typeof resolved === 'string') {
    return resolved.trim() === '';
  }
  return resolved == null || resolved === false;
}

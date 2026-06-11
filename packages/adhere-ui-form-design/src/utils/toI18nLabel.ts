import { SELECT_VALUE_KEY_NAME } from '../constant';
import type { I18nValue } from '../types';

export function toI18nLabel(
  label: string | I18nValue | undefined | null,
  lang: string,
  localesKeys: string[],
): I18nValue {
  if (label && typeof label === 'object' && SELECT_VALUE_KEY_NAME in label) {
    return label as I18nValue;
  }

  // 兼容历史数据：{ key: 'zh_CN', zh_CN: '...' }
  if (label && typeof label === 'object' && 'key' in label) {
    const legacy = label as Record<string, unknown>;
    const selectLang = typeof legacy.key === 'string' ? legacy.key : lang;
    const next: Record<string, string | null | undefined> = {
      [SELECT_VALUE_KEY_NAME]: selectLang,
    };
    localesKeys.forEach((key) => {
      const value = legacy[key];
      next[key] = typeof value === 'string' ? value : null;
    });
    return next as I18nValue;
  }

  const next: Record<string, string | null | undefined> = { [SELECT_VALUE_KEY_NAME]: lang };
  localesKeys.forEach((key) => {
    next[key] = key === lang ? (typeof label === 'string' ? label : '') : null;
  });
  return next as I18nValue;
}

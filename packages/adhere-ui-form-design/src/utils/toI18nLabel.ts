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

  const next: Record<string, string | null | undefined> = { [SELECT_VALUE_KEY_NAME]: lang };
  localesKeys.forEach((key) => {
    next[key] = key === lang ? (typeof label === 'string' ? label : '') : null;
  });
  return next as I18nValue;
}

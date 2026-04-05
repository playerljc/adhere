import { SELECT_VALUE_KEY_NAME } from '../constant';
import type { I18nValue } from '../types';

export function resolveI18nText(value: I18nValue | string | undefined, lang: string): string {
  if (value === undefined || value === null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && SELECT_VALUE_KEY_NAME in value) {
    const i18n = value as I18nValue;
    return String(i18n[lang] ?? i18n[i18n.selectValue] ?? '');
  }
  return '';
}

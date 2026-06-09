import clone from 'rfdc';

import type { I18nValue } from '../../../../../types/Components';
import type { DesignValue } from '../../../../../types';

const cloneDeep = clone();

const I18N_LOCALE_KEYS = ['en_US', 'pt_PT', 'ar_EG'] as const;

function isI18nValue(value: unknown): value is I18nValue {
  return (
    typeof value === 'object' &&
    value !== null &&
    'selectValue' in value &&
    'zh_CN' in value
  );
}

function walkAndCompleteI18n(
  node: unknown,
  translations: Record<string, Partial<Record<string, string>>>,
): void {
  if (Array.isArray(node)) {
    node.forEach((item) => walkAndCompleteI18n(item, translations));
    return;
  }
  if (!node || typeof node !== 'object') return;

  if (isI18nValue(node)) {
    const zh = node.zh_CN;
    if (typeof zh === 'string') {
      const trans = translations[zh];
      if (trans) {
        I18N_LOCALE_KEYS.forEach((locale) => {
          if ((node[locale] == null || node[locale] === undefined) && trans[locale]) {
            node[locale] = trans[locale];
          }
        });
      }
    }
    return;
  }

  Object.values(node).forEach((value) => walkAndCompleteI18n(value, translations));
}

/**
 * 遍历设计树，按 zh_CN 词条补全缺失的 en_US / pt_PT / ar_EG
 */
export function completeDesignValueI18n(
  designValue: DesignValue,
  translations: Record<string, Partial<Record<string, string>>>,
): DesignValue {
  const next = cloneDeep(designValue);
  walkAndCompleteI18n(next, translations);
  return next;
}

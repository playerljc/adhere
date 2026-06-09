import { getLocales } from '@baifendian/adhere-util-intl';

import { SELECT_VALUE_KEY_NAME } from '../../../../../constant';
import type { I18nValue } from '../../../../../types';

const LOCALE_KEYS = ['zh_CN', 'en_US', 'pt_PT', 'ar_EG'] as const;

function getLocaleDict(locale: (typeof LOCALE_KEYS)[number]): Record<string, string> {
  return getLocales()[locale] ?? {};
}

/**
 * 从 adhere-util-intl 已加载 locale 词条 key 构建 I18nValue
 */
export function i18nFromKey(key: string): I18nValue {
  const result: Record<string, string> = { [SELECT_VALUE_KEY_NAME]: 'zh_CN' };
  for (const loc of LOCALE_KEYS) {
    result[loc] = getLocaleDict(loc)[key] ?? key;
  }
  return result as I18nValue;
}

/**
 * 从 locale key 取词条字符串（用于 Submit 按钮 children 等纯文本场景）
 */
export function textFromKey(key: string, locale: (typeof LOCALE_KEYS)[number] = 'zh_CN'): string {
  return getLocaleDict(locale)[key] ?? key;
}

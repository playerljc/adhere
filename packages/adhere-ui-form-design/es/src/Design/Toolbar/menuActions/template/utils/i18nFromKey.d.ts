import type { I18nValue } from '../../../../../types';
declare const LOCALE_KEYS: readonly ["zh_CN", "en_US", "pt_PT", "ar_EG"];
/**
 * 从 adhere-util-intl 已加载 locale 词条 key 构建 I18nValue
 */
export declare function i18nFromKey(key: string): I18nValue;
/**
 * 从 locale key 取词条字符串（用于 Submit 按钮 children 等纯文本场景）
 */
export declare function textFromKey(key: string, locale?: (typeof LOCALE_KEYS)[number]): string;
export {};

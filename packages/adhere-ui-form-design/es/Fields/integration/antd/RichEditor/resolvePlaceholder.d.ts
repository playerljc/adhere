import type { I18nValue } from '../../../../types';
/** 解析富文本占位符（兼容 i18n 对象、纯字符串、未带 selectValue 的对象） */
export declare function resolveRichEditorPlaceholder(value: I18nValue | string | null | undefined, lang: string): string;

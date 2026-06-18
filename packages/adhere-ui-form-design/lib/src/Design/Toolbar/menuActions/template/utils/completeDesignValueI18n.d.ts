import type { DesignValue } from '../../../../../types';
/**
 * 遍历设计树，按 zh_CN 词条补全缺失的 en_US / pt_PT / ar_EG
 */
export declare function completeDesignValueI18n(designValue: DesignValue, translations: Record<string, Partial<Record<string, string>>>): DesignValue;

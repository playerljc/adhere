import type { CurrenciesItem } from './types';
/**
 * 验证货币代码是否有效
 * @param code - 货币代码
 * @returns 是否为有效的货币代码
 * @example
 * ```ts
 * isValidCurrencyCode('USD'); // true
 * isValidCurrencyCode('INVALID'); // false
 * ```
 */
export declare function isValidCurrencyCode(code: string): boolean;
/**
 * 获取货币信息
 * @param code - 货币代码
 * @returns 货币信息对象，如果代码无效则返回undefined
 * @example
 * ```ts
 * getCurrencyInfo('USD'); // { name: 'United States Dollar', symbol: '$', code: 'USD' }
 * getCurrencyInfo('INVALID'); // undefined
 * ```
 */
export declare function getCurrencyInfo(code: string): CurrenciesItem | undefined;
/**
 * 获取货币符号
 * @param code - 货币代码
 * @returns 货币符号，如果代码无效则返回undefined
 * @example
 * ```ts
 * getCurrencySymbol('USD'); // '$'
 * getCurrencySymbol('EUR'); // '€'
 * getCurrencySymbol('INVALID'); // undefined
 * ```
 */
export declare function getCurrencySymbol(code: string): string | undefined;
/**
 * 获取货币名称
 * @param code - 货币代码
 * @returns 货币名称，如果代码无效则返回undefined
 * @example
 * ```ts
 * getCurrencyName('USD'); // 'United States Dollar'
 * getCurrencyName('INVALID'); // undefined
 * ```
 */
export declare function getCurrencyName(code: string): string | undefined;
/**
 * 获取所有支持的货币代码列表
 * @returns 货币代码数组
 * @example
 * ```ts
 * getAllCurrencyCodes(); // ['USD', 'EUR', 'GBP', ...]
 * ```
 */
export declare function getAllCurrencyCodes(): string[];
/**
 * 获取所有货币信息列表
 * @returns 货币信息数组
 * @example
 * ```ts
 * getAllCurrencies(); // [{ name: 'United States Dollar', symbol: '$', code: 'USD' }, ...]
 * ```
 */
export declare function getAllCurrencies(): CurrenciesItem[];
/**
 * 格式化金额为字符串
 * @param amount - 金额数值
 * @param useKilo - 是否使用千分位分隔符
 * @returns 格式化后的金额字符串
 * @example
 * ```ts
 * formatAmount(1234.56, true); // '1,234.56'
 * formatAmount(1234.56, false); // '1234.56'
 * ```
 */
export declare function formatAmount(amount: number, useKilo?: boolean): string;

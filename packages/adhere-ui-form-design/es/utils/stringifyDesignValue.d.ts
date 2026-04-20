import type { DesignValue } from '../types';
/**
 * 将设计树序列化为格式化 JSON 字符串（函数省略、React 元素占位为 [ReactNode]）。
 */
export declare function stringifyDesignValue(value: DesignValue): string;

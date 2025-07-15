/**
 * 文件大小格式化工具类
 * @description 提供文件大小友好显示的工具函数
 */
import type { PrettyBytesOptions } from './types';
declare const SizeUtil: {
    /**
     * 格式化文件大小
     * @description 将字节数格式化为友好的字符串（支持二进制、十进制、比特、带符号、国际化等）
     * @param number - 文件大小（字节数）
     * @param options - 格式化选项
     * @returns 格式化后的字符串
     * @example
     * ```typescript
     * prettyBytes(1024) // "1.02 kB"
     * prettyBytes(1024, { binary: true }) // "1 kiB"
     * prettyBytes(1024, { bits: true }) // "8.19 kbit"
     * prettyBytes(1024, { signed: true }) // "+1.02 kB"
     * ```
     */
    prettyBytes(number: number, options?: PrettyBytesOptions): string;
};
export default SizeUtil;

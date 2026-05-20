import type { MediaConfig } from './types';
/**
 * 根据媒体配置和尺寸值计算最终的CSS值
 *
 * @param media - 媒体查询配置对象
 * @param size - 尺寸值，可以是数字(像素)或字符串(带单位)
 * @returns 计算后的CSS值字符串
 *
 * @example
 * ```typescript
 * // 数字输入，使用媒体查询
 * getValue({ isUseMedia: true, designWidth: 750 }, 20); // "2.6666666666666665rem"
 *
 * // 数字输入，不使用媒体查询
 * getValue({ isUseMedia: false }, 20); // "20px"
 *
 * // 字符串输入
 * getValue({}, "2rem"); // "2rem"
 * ```
 */
export declare function getValue(media: MediaConfig | undefined, size: number | string): string;

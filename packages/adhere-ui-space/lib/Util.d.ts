import type { MediaConfig } from './types';
/**
 * 根据媒体查询配置和尺寸值计算最终的 CSS 值
 *
 * @param media - 媒体查询配置对象
 * @param size - 尺寸值，可以是数字（像素）或字符串（CSS 值）
 * @returns 计算后的 CSS 值字符串
 *
 * @example
 * ```typescript
 * // 数字类型，使用媒体查询
 * getValue({ isUseMedia: true, designWidth: 750 }, 40)
 * // 返回: "2.133rem" (假设 pxToRem 转换结果)
 *
 * // 数字类型，不使用媒体查询
 * getValue({ isUseMedia: false }, 40)
 * // 返回: "40px"
 *
 * // 字符串类型
 * getValue({}, "1rem")
 * // 返回: "1rem"
 * ```
 */
export declare function getValue(media: MediaConfig | undefined, size: number | string): string;

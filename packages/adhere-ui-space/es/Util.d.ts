import type { MediaConfig } from './types';
/**
 * 根据媒体查询配置和尺寸值计算最终的 CSS 值
 *
 * @param media - 媒体查询配置对象
 * @param size - 尺寸值，可以是数字（像素）或字符串（CSS 值）
 * @returns 计算后的 CSS 值字符串
 */
export declare function getValue(media: MediaConfig | undefined, size: number | string): string;

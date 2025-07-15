import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

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
export function getValue(media: MediaConfig | undefined, size: number | string): string {
  // 如果 size 是数字类型
  if (Util.isNumber(size)) {
    const numericSize = size as number;
    
    // 如果启用了媒体查询且有设计稿宽度
    if (media?.isUseMedia && media?.designWidth) {
      return Util.pxToRem(numericSize, media.designWidth);
    }
    
    // 默认返回像素值
    return `${numericSize}px`;
  }
  
  // 如果 size 是字符串类型，直接返回
  return size as string;
}

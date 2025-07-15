import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

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
export function getValue(media: MediaConfig | undefined, size: number | string): string {
  // 如果size是数字类型
  if (Util.isNumber(size)) {
    const numericSize = size as number;
    
    // 如果启用了媒体查询且有设计稿宽度
    if (media?.isUseMedia && media.designWidth) {
      return Util.pxToRem(numericSize, media.designWidth);
    }

    // 默认返回像素值
    return `${numericSize}px`;
  }

  // 如果size是字符串，直接返回
  return size as string;
}

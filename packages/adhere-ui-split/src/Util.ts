import Util from '@baifendian/adhere-util';

import type { MediaConfig } from './types';

/**
 * 根据媒体配置和尺寸值计算最终的CSS值
 *
 * @param media - 媒体查询配置对象
 * @param size - 尺寸值，可以是数字(像素)或字符串(带单位)
 * @returns 计算后的CSS值字符串
 */
export function getValue(media: MediaConfig | undefined, size: number | string): string {
  if (Util.isNumber(size)) {
    const numericSize = size as number;

    if (
      media?.isUseMedia &&
      typeof media.designWidth === 'number' &&
      media.designWidth > 0
    ) {
      return Util.pxToRem(numericSize, media.designWidth);
    }

    return `${numericSize}px`;
  }

  return size as string;
}

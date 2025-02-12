import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

/**
 * @typedef {ConfigProviderProps['media]} Media
 */
/**
 * getValue
 * @param {Media} media
 * @param {number} size
 * @return {string}
 */
export function getValue(media: ConfigProviderProps['media'], size: number | string): string {
  if (Util.isNumber(size)) {
    if (media?.isUseMedia) {
      return Util.pxToRem(size as number, media?.designWidth as number);
    }

    return `${size}px`;
  }

  return size as string;
}

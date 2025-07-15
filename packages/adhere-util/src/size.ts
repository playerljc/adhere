/**
 * 文件大小格式化工具类
 * @description 提供文件大小友好显示的工具函数
 */
import type { PrettyBytesOptions } from './types';

const BYTE_UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const BIBYTE_UNITS = ['B', 'kiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
const BIT_UNITS = ['b', 'kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'];
const BIBIT_UNITS = ['b', 'kibit', 'Mibit', 'Gibit', 'Tibit', 'Pibit', 'Eibit', 'Zibit', 'Yibit'];

const toLocaleString = (number: number, locale: boolean | string | string[] | undefined, options: Intl.NumberFormatOptions | undefined) => {
  let result: string | number = number;
  if (typeof locale === 'string' || Array.isArray(locale)) {
    result = number.toLocaleString(locale, options);
  } else if (locale === true || options !== undefined) {
    result = number.toLocaleString(undefined, options);
  }
  return result;
};

const SizeUtil = {
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
  prettyBytes(number: number, options?: PrettyBytesOptions): string {
    if (!Number.isFinite(number)) {
      throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }

    options = {
      bits: false,
      binary: false,
      space: true,
      ...options,
    };

    const UNITS = options.bits
      ? options.binary
        ? BIBIT_UNITS
        : BIT_UNITS
      : options.binary
      ? BIBYTE_UNITS
      : BYTE_UNITS;

    const separator = options.space ? ' ' : '';

    if (options.signed && number === 0) {
      return ` 0${separator}${UNITS[0]}`;
    }

    const isNegative = number < 0;
    const prefix = isNegative ? '-' : options.signed ? '+' : '';

    if (isNegative) {
      number = -number;
    }

    let localeOptions: Intl.NumberFormatOptions | undefined;

    if (options.minimumFractionDigits !== undefined) {
      localeOptions = { minimumFractionDigits: options.minimumFractionDigits };
    }

    if (options.maximumFractionDigits !== undefined) {
      localeOptions = { maximumFractionDigits: options.maximumFractionDigits, ...localeOptions };
    }

    if (number < 1) {
      const numberString = toLocaleString(number, options.locale, localeOptions);
      return prefix + numberString + separator + UNITS[0];
    }

    const exponent = Math.min(
      Math.floor(options.binary ? Math.log(number) / Math.log(1024) : Math.log10(number) / 3),
      UNITS.length - 1,
    );
    number /= (options.binary ? 1024 : 1000) ** exponent;

    if (!localeOptions) {
      number = Number(number.toPrecision(3));
    }

    const numberString = toLocaleString(Number(number), options.locale, localeOptions);
    const unit = UNITS[exponent];
    return prefix + numberString + separator + unit;
  },
};

export default SizeUtil;

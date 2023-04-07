import type { PrettyBytesOptions } from './types';
declare const _default: {
    /**
     * prettyBytes
     * @description Formats the given number using `Number#toLocaleString`.
     * - If locale is a string, the value is expected to be a locale-key (for example: `de`).
     * - If locale is true, the system default locale is used for translation.
     * - If no value for locale is specified, the number is returned unmodified.
     * @param {number} number - The number to format.
     * @param {PrettyBytesOptions} options
     */
    prettyBytes(number: any, options?: PrettyBytesOptions): string;
};
export default _default;

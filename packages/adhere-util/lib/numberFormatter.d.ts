export type NumberFormatterLocale = {
    thousandsSep: string;
    decimalSep: string;
};
export type NumberFormatterOptions = {
    /**
     * 是否以科学计数法显示超大数。
     * 未传时取全局默认值（见 setNumberFormatterUseScientificNotation）。
     * @default false
     */
    useScientificNotation?: boolean;
};
export declare function setNumberFormatterUseScientificNotation(useScientificNotation: boolean): void;
export declare function getNumberFormatterUseScientificNotation(): boolean;
export declare function formatLocaleNumber(value: string | number, precision: number | undefined, locale: NumberFormatterLocale, options?: NumberFormatterOptions): string;

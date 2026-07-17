import type { ReactElement } from 'react';
import { type ReactIntlUniversalHTMLMessage, type ReactIntlUniversalMessageDescriptor, type ReactIntlUniversalVariables } from 'react-intl-universal';
/**
 * Supported locale types
 */
export type SupportedLocale = 'en_US' | 'zh_CN' | 'pt_PT' | 'ar_EG' | string;
/**
 * Locale item can be either a string or an object with key-value pairs
 */
export type LocaleItem = string | Record<string, string>;
/**
 * Locale data structure - array of locale items
 */
export type LocaleData = LocaleItem[];
/**
 * Locales configuration - mapping of locale codes to locale data
 */
export type LocalesConfig = Record<SupportedLocale, LocaleData>;
/**
 * Processed locale object with key-value pairs
 */
export type ProcessedLocale = Record<string, string>;
/**
 * Main locales storage - mapping of locale codes to processed locales
 */
export type MainLocales = Record<SupportedLocale, ProcessedLocale>;
/**
 * Variables object for interpolation
 */
export type Variables = ReactIntlUniversalVariables;
/**
 * Options object for HTML formatting
 */
export type HtmlOptions = ReactIntlUniversalVariables;
/**
 * Initialization configuration interface
 */
export interface InitConfig {
    /** Prefix for generated locale keys */
    prefix?: string;
    /** Current locale to use */
    currentLocale?: SupportedLocale;
    /** Main language for fallback */
    mainLanguage?: SupportedLocale;
    /** Locale data configuration */
    locales: LocalesConfig;
    /** Additional react-intl-universal options */
    [key: string]: any;
}
/**
 * Generate a key-value object from an array of strings
 *
 * @param prefix - Prefix for generated keys (default: 'local')
 * @param data - Array of strings to convert to key-value pairs
 * @returns Object with generated keys and corresponding values
 *
 * @example
 * ```typescript
 * getLocal('prefix', ['Hello', 'World'])
 * // Returns: { prefix1: 'Hello', prefix2: 'World' }
 * ```
 */
export declare function getLocal(prefix: string | undefined, data: string[]): ProcessedLocale;
/**
 * Get all processed locales
 *
 * @returns Copy of the main locales object
 */
export declare function getLocales(): MainLocales;
/**
 * Main internationalization service
 */
declare const IntlService: {
    /**
     * Initialize the internationalization service
     *
     * @param config - Initialization configuration
     * @param reload - Whether to reload if already initialized
     * @returns Promise that resolves when initialization is complete
     *
     * @throws Error if initialization fails
     *
     * @example
     * ```typescript
     * await IntlService.init({
     *   currentLocale: 'en_US',
     *   mainLanguage: 'zh_CN',
     *   locales: {
     *     en_US: ['Hello', 'World'],
     *     zh_CN: ['你好', '世界']
     *   }
     * });
     * ```
     */
    init({ prefix, currentLocale, mainLanguage, locales, ...rest }: InitConfig, reload?: boolean): Promise<void>;
    /**
     * Check if the service has been initialized
     *
     * @returns True if initialized, false otherwise
     */
    isInit(): boolean;
    /**
     * Get internationalized value using Chinese text as key
     *
     * @param key - Chinese text key
     * @param variables - Variables for interpolation
     * @returns Internationalized string
     *
     * @example
     * ```typescript
     * IntlService.v('你好', { name: 'World' });
     * ```
     */
    v(key: string, variables?: Variables | null): string;
    /**
     * Get internationalized HTML using Chinese text as key
     *
     * @param key - Chinese text key
     * @param options - HTML formatting options
     * @returns Internationalized HTML string or React element
     *
     * @example
     * ```typescript
     * IntlService.vHtml('欢迎', { name: 'User' });
     * ```
     */
    vHtml(key: string, options?: HtmlOptions | null): ReactIntlUniversalHTMLMessage;
    /**
     * Get internationalized value using locale key
     *
     * @param key - Locale key
     * @param variables - Variables for interpolation
     * @returns Internationalized string
     *
     * @example
     * ```typescript
     * IntlService.get('hello', { name: 'World' });
     * ```
     */
    get(key: string, variables?: Variables | null): string;
    /**
     * Get internationalized HTML using locale key
     *
     * @param key - Locale key
     * @param options - HTML formatting options
     * @returns Internationalized HTML string or React element
     *
     * @example
     * ```typescript
     * IntlService.getHTML('welcome', { name: 'User' });
     * ```
     */
    getHTML(key: string, options?: HtmlOptions | null): ReactIntlUniversalHTMLMessage;
    /**
     * Format message using ReactIntlUniversalMessageDescriptor
     *
     * @param options - Message descriptor options
     * @param variables - Variables for interpolation
     * @returns Formatted message string
     *
     * @example
     * ```typescript
     * IntlService.formatMessage(
     *   { id: 'welcome', defaultMessage: 'Welcome' },
     *   { name: 'User' }
     * );
     * ```
     */
    formatMessage(options: ReactIntlUniversalMessageDescriptor, variables?: Variables | null): string;
    /**
     * Format HTML message using ReactIntlUniversalMessageDescriptor
     *
     * @param options - Message descriptor options
     * @param variables - Variables for interpolation
     * @returns Formatted HTML message string or React element
     *
     * @example
     * ```typescript
     * IntlService.formatHTMLMessage(
     *   { id: 'welcome', defaultMessage: 'Welcome <strong>{name}</strong>' },
     *   { name: 'User' }
     * );
     * ```
     */
    formatHTMLMessage(options: ReactIntlUniversalMessageDescriptor, variables?: Variables | null): string | ReactElement;
    /**
     * Get initialization options from react-intl-universal
     *
     * @returns Current initialization options
     */
    getInitOptions(): any;
    /**
     * Load additional locales after initialization
     *
     * @param locales - Additional locale data to load
     *
     * @example
     * ```typescript
     * IntlService.load({
     *   'fr_FR': ['Bonjour', 'Monde']
     * });
     * ```
     */
    load(locales: Record<string, any>): void;
    /**
     * Generate local object from string array (alias for getLocal function)
     *
     * @param prefix - Prefix for generated keys
     * @param data - Array of strings
     * @returns Generated key-value object
     *
     * @see getLocal
     */
    getLocal(prefix: string | undefined, data: string[]): ProcessedLocale;
    /**
     * Reset the service state (useful for testing)
     *
     * @internal
     */
    _reset(): void;
};
export default IntlService;

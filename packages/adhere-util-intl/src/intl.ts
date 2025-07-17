import intl, { type ReactIntlUniversalMessageDescriptor } from 'react-intl-universal';

// import ar_EG from './locales/ar_EG';
// import en_US from './locales/en_US';
// import pt_PT from './locales/pt_PT';
// import zh_CN from './locales/zh_CN';

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
export type Variables = Record<string, string | number | boolean>;

/**
 * Options object for HTML formatting
 */
export type HtmlOptions = Record<string, any>;

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
 * IntlMap interface for mapping Chinese keys to internationalized values
 */
interface IntlMap {
  [key: string]: string;
}

/**
 * IntlKey interface for mapping Chinese keys to their corresponding locale keys
 */
interface IntlKey {
  [key: string]: string;
}

// Internal state variables
let isInitialized = false;
const intlMap: IntlMap = {};
const intlKey: IntlKey = {};
const localKeys = new Map<string, string>();
let mainLocales: MainLocales = {};

/**
 * Initialize the internationalization map with Chinese keys
 *
 * @param zhCN - Chinese locale object with key-value pairs
 * @description Creates mappings from Chinese text to internationalized values and keys
 */
function initIntlMap(zhCN: ProcessedLocale): void {
  const properties = Object.getOwnPropertyNames(zhCN);

  properties.forEach((property) => {
    const chineseValue = zhCN[property];

    // Ensure chineseValue is not undefined
    if (chineseValue !== undefined) {
      // Map Chinese value to internationalized value
      intlMap[chineseValue] = intl.get(property);

      // Map Chinese value to its corresponding locale key
      intlKey[chineseValue] = property;
    }
  });
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
export function getLocal(prefix: string = 'local', data: string[]): ProcessedLocale {
  const result = [...data];
  const local: ProcessedLocale = {};

  for (let i = 0; i < result.length; i++) {
    const key = `${prefix}${i + 1}`;

    let value = localKeys.get(key);

    if (!value) {
      localKeys.set(key, key);
      value = key;
    }

    // Ensure result[i] is not undefined
    const item = result[i];
    if (item !== undefined) {
      local[key] = item;
    }
  }

  return local;
}

/**
 * Get all processed locales
 *
 * @returns Copy of the main locales object
 */
export function getLocales(): MainLocales {
  return { ...mainLocales };
}

/**
 * Process locale data into key-value pairs
 *
 * @param localeData - Array of locale items (strings or objects)
 * @param prefix - Prefix for generated keys
 * @returns Processed locale object
 */
function processLocaleData(localeData: LocaleData, prefix: string): ProcessedLocale {
  const stringItems: string[] = [];
  const objectEntries: Record<string, string>[] = [];

  // Separate strings and objects
  localeData.forEach((item) => {
    if (typeof item === 'string') {
      stringItems.push(item);
    } else {
      objectEntries.push(item);
    }
  });

  // Generate local object from strings
  const processedLocale = getLocal(prefix, stringItems);

  // Merge object entries
  objectEntries.forEach((entry) => {
    Object.assign(processedLocale, entry);
  });

  return processedLocale;
}

/**
 * Main internationalization service
 */
const IntlService = {
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
  async init(
    {
      prefix = 'local',
      currentLocale = 'zh_CN',
      mainLanguage = 'zh_CN',
      locales = {},
      ...rest
    }: InitConfig,
    reload: boolean = false,
  ): Promise<void> {
    if (!reload && isInitialized) {
      throw new Error(
        'Internationalization service is already initialized. Use reload=true to reinitialize.',
      );
    }

    // Process user locales
    const localeKeys = Object.keys(locales);

    localeKeys.forEach((localeKey) => {
      const localeData = locales[localeKey as SupportedLocale];
      if (localeData) {
        mainLocales[localeKey as SupportedLocale] = processLocaleData(localeData, prefix);
      }
    });

    // Initialize react-intl-universal
    await intl.init({
      currentLocale,
      locales: mainLocales,
      ...rest,
    });

    // Initialize internal maps
    const mainLanguageData = mainLocales[mainLanguage];
    if (mainLanguageData) {
      initIntlMap(mainLanguageData);
    }
    isInitialized = true;
  },

  /**
   * Check if the service has been initialized
   *
   * @returns True if initialized, false otherwise
   */
  isInit(): boolean {
    return isInitialized;
  },

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
  v(key: string, variables?: Variables | null): string {
    if (!isInitialized) {
      console.warn('Internationalization service not initialized. Call init() first.');
      return '';
    }

    if (variables) {
      const localeKey = intlKey[key];
      if (localeKey) {
        return intl.get(localeKey, variables);
      }
    }

    return intlMap[key] || key;
  },

  /**
   * Get internationalized HTML using Chinese text as key
   *
   * @param key - Chinese text key
   * @param options - HTML formatting options
   * @returns Internationalized HTML string
   *
   * @example
   * ```typescript
   * IntlService.vHtml('欢迎', { name: 'User' });
   * ```
   */
  vHtml(key: string, options?: HtmlOptions | null): string {
    if (!isInitialized) {
      console.warn('Internationalization service not initialized. Call init() first.');
      return '';
    }

    if (options) {
      const localeKey = intlKey[key];
      if (localeKey) {
        return intl.getHTML(localeKey, options);
      }
    }

    return intlMap[key] || key;
  },

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
  get(key: string, variables?: Variables | null): string {
    return intl.get(key, variables);
  },

  /**
   * Get internationalized HTML using locale key
   *
   * @param key - Locale key
   * @param options - HTML formatting options
   * @returns Internationalized HTML string
   *
   * @example
   * ```typescript
   * IntlService.getHTML('welcome', { name: 'User' });
   * ```
   */
  getHTML(key: string, options?: HtmlOptions | null): string {
    return intl.getHTML(key, options);
  },

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
  formatMessage(
    options: ReactIntlUniversalMessageDescriptor,
    variables?: Variables | null,
  ): string {
    return intl.formatMessage(options, variables);
  },

  /**
   * Format HTML message using ReactIntlUniversalMessageDescriptor
   *
   * @param options - Message descriptor options
   * @param variables - Variables for interpolation
   * @returns Formatted HTML message string
   *
   * @example
   * ```typescript
   * IntlService.formatHTMLMessage(
   *   { id: 'welcome', defaultMessage: 'Welcome <strong>{name}</strong>' },
   *   { name: 'User' }
   * );
   * ```
   */
  formatHTMLMessage(
    options: ReactIntlUniversalMessageDescriptor,
    variables?: Variables | null,
  ): string {
    return intl.formatHTMLMessage(options, variables);
  },

  /**
   * Get initialization options from react-intl-universal
   *
   * @returns Current initialization options
   */
  getInitOptions(): any {
    return intl.getInitOptions();
  },

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
  load(locales: Record<string, any>): void {
    intl.load(locales);
  },

  /**
   * Generate local object from string array (alias for getLocal function)
   *
   * @param prefix - Prefix for generated keys
   * @param data - Array of strings
   * @returns Generated key-value object
   *
   * @see getLocal
   */
  getLocal(prefix: string = 'local', data: string[]): ProcessedLocale {
    return getLocal(prefix, data);
  },

  /**
   * Reset the service state (useful for testing)
   *
   * @internal
   */
  _reset(): void {
    isInitialized = false;
    Object.keys(intlMap).forEach((key) => delete intlMap[key]);
    Object.keys(intlKey).forEach((key) => delete intlKey[key]);
    localKeys.clear();
    mainLocales = {};
  },
};

export default IntlService;

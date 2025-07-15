import IntlService, { 
  getLocal, 
  getLocales,
  type SupportedLocale,
  type LocaleItem,
  type LocaleData,
  type LocalesConfig,
  type ProcessedLocale,
  type MainLocales,
  type Variables,
  type HtmlOptions,
  type InitConfig
} from './intl';

// Export utility functions
export { getLocales, getLocal };

// Export types
export type {
  SupportedLocale,
  LocaleItem,
  LocaleData,
  LocalesConfig,
  ProcessedLocale,
  MainLocales,
  Variables,
  HtmlOptions,
  InitConfig
};

// Export default service
export default IntlService;

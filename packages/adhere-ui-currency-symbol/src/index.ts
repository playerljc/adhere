import CurrencySymbol from './CurrencySymbol';

// 导出类型定义
export type {
  CurrencySymbolProps,
  CurrencySymbolComponent,
  CurrenciesItem,
  CurrencySymbolSize,
  CurrencySymbolAlign,
} from './types';

// 导出常量
export { default as codes } from './codes';
export { default as currencies } from './currencies';
export { default as currenciesMap } from './currenciesMap';

// 导出工具函数
export {
  isValidCurrencyCode,
  getCurrencyInfo,
  getCurrencySymbol,
  getCurrencyName,
  getAllCurrencyCodes,
  getAllCurrencies,
  formatAmount,
} from './utils';

// 导出主组件
export default CurrencySymbol;

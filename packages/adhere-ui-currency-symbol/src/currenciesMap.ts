import currencies from './currencies';
import type { CurrenciesItem } from './types';

/**
 * 货币信息映射表
 * @description 将货币代码映射到对应的货币信息对象
 * @type {Map<string, CurrenciesItem>}
 */
const currenciesMap: Map<string, CurrenciesItem> = currencies.reduce((map, config) => {
  map.set(config.code, config);
  return map;
}, new Map<string, CurrenciesItem>());

export default currenciesMap;
